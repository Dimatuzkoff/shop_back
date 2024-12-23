import http from 'http';
import express from 'express'; // добавлен импорт express
import app from './src/app/index.js';
import 'dotenv/config';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';
import { UAParser } from 'ua-parser-js';
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
        };
    });
};

const getAgrigatedUserList = () => {
    const userList = getUserList(); // Получаем список всех соединений

    const aggregatedUsers = userList.reduce((acc, connection) => {
        const userId = connection.user?._id;

        if (!acc[userId]) {
            acc[userId] = {
                user: connection.user, // Информация о пользователе
                connections: [], // Массив соединений
            };
        }

        acc[userId].connections.push({
            id: connection.id,
            ip: connection.ip,
            agent: connection.agent,
        });

        return acc;
    }, {});

    // Возвращаем массив сгруппированных пользователей
    return Object.values(aggregatedUsers);
};


io.on('connection', (socket) => {
    socket.user = 'anonimous';
    console.log('Пользователь подключен:', socket.id);
    clients.push(socket);
    console.log('Клиентов подключено:', clients.length);

    io.emit('userList', getAgrigatedUserList());

    socket.on('userInfo', (info) => {
        socket.user = info;
        io.emit('userList', getAgrigatedUserList());
    })

    socket.on('getUserListKick', (data) => {
        io.emit('userList', getAgrigatedUserList());

    });

    socket.on('message', (msg) => {
        console.log('Сообщение от клиента:', msg);
        io.emit('message', msg); // Рассылка сообщения всем клиентам
    });

    socket.on('disconnect', () => {
        console.log('Пользователь отключен:', socket.id);
        clients.splice(clients.indexOf(socket), 1);
        io.emit('userList', getAgrigatedUserList());
    });

});
