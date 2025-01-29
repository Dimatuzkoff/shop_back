import http from 'http';
import express from 'express'; // добавлен импорт express
import app from './src/app/index.js';
import 'dotenv/config';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';
import { UAParser } from 'ua-parser-js';
import { sign } from 'crypto';
import Msg from "./src/modeles/message.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 3001;


// app.use(express.static(staticPath));

const server = http.createServer(app);
console.log("Сервер работает на порту " + port);

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000", "https://shop-front-nine.vercel.app"],
        methods: ["GET", "POST"],
    },
});

server.listen(port);

const clients = [];



const getUserList = () => {
    return clients.map(elem => {
        const userAgent = elem.handshake.headers['user-agent'];
        const parser = new UAParser(userAgent);
        const deviceInfo = parser.getResult();

        const agent = {
            browser: deviceInfo.browser.name || 'Unknown',
            browserVersion: deviceInfo.browser.version || 'Unknown',
            os: deviceInfo.os.name || 'Unknown',
            osVersion: deviceInfo.os.version || 'Unknown',
            device: deviceInfo.device.model || 'Desktop',
            type: deviceInfo.device.type || 'PC',
        };

        return {
            user: elem.user, // Информация о пользователе
            id: elem.id, // Socket ID
            ip: elem.handshake.address, // IP адрес
            agent, // Информация об устройстве
            fingerprint: elem.fingerprint
        };
    });
};

const getAgrigatedUserList = () => {
    const userList = getUserList(); // Получаем список всех соединений

    const aggregatedUsers = userList.reduce((acc, connection) => {
        const userId = connection.user?._id;
        const fingerprint = connection.fingerprint;
        const sign = userId || fingerprint;

        if (!acc[sign]) {
            acc[sign] = {
                user: connection.user, // Информация о пользователе
                connections: [], // Массив соединений
                sign
            };
        }

        acc[sign].connections.push({
            id: connection.id,
            ip: connection.ip,
            agent: connection.agent,
        });


        return acc;
    }, {});

    // Возвращаем массив сгруппированных пользователей
    return Object.values(aggregatedUsers);
};

async function getAllChatMessages(fingerPrint) {
    const msgs = await Msg.find({ fingerPrint });
    return msgs
}

io.on('connection', (socket) => {
    socket.user = 'anonimous';
    clients.push(socket);

    // io.emit('userList', getAgrigatedUserList());

    socket.on('setFingerPrint', async (fingerprint) => {
        socket.fingerprint = fingerprint;
        const messages = await getAllChatMessages(fingerprint);
        socket.emit('allChatMessages', messages)
        io.emit('userList', getAgrigatedUserList()); //добавил
    })


    socket.on('userInfo', (info) => {
        socket.user = info;
        io.emit('userList', getAgrigatedUserList());
    })

    socket.on('getUserListKick', (data) => {
        io.emit('userList', getAgrigatedUserList());

    });

    socket.on('message', (msg) => {
        const newMsg = new Msg(msg);
        newMsg.save();
    });

    socket.on('disconnect', () => {
        console.log('Пользователь отключен:', socket.id);
        clients.splice(clients.indexOf(socket), 1);
        io.emit('userList', getAgrigatedUserList());
    });

});
