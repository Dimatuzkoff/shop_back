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

    const aggregatedUsers = userList.reduce((acc, connection, index) => {
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

async function getAllChatMessages(field, value) {//функция вытягивает с базы все сообщения текущего пользователя по пинку 
    let filter = { [field]: value };
    let msgs = await Msg.find(filter);
    return msgs
}

io.on('connection', (socket) => {
    socket.user = 'anonimous';
    clients.push(socket);

    socket.on('setFingerPrint', async (fingerprint) => {
        socket.fingerprint = fingerprint;
        io.emit('userList', getAgrigatedUserList());

    })

    socket.on('userInfo', async (info) => {
        socket.user = info;
        io.emit('userList', getAgrigatedUserList());
    })

    socket.on('getUserListKick', (data) => {
        io.emit('userList', getAgrigatedUserList());

    });

    socket.on('getAllMsgsKick', async (data) => {//пинаем с фронта чтобы получить вссе сообщения
        const field = data.phone ? "phone" : "fingerPrint";
        const value = data.phone || data.fingerPrint;
        const messages = await getAllChatMessages(field, value);
        if (messages.length > 0) socket.emit('allChatMessages', messages)

    });


    socket.on('getMsgsListKick', async () => {
        let msgs = await Msg.find({});
        const arrPhone = [];
        const arrFingerPrint = [];
        let list = [];

        msgs.forEach((item) => {
            if (item.phone && !arrPhone.includes(item.phone)) {
                arrPhone.push(item.phone);
            } else if (item.fingerPrint && !arrFingerPrint.includes(item.fingerPrint)) {
                arrFingerPrint.push(item.fingerPrint);
            }
        })

        arrPhone.forEach((item) => {
            list.push({ phone: item })
        })

        arrFingerPrint.forEach((item) => {
            list.push({ fingerPrint: item })
        })

        if (list.length > 0) socket.emit('getMsgsList', list)

    })

    socket.on('message', async (msg) => {
        const newMsg = new Msg(msg);
        await newMsg.save();
        const field = newMsg.phone ? "phone" : "fingerPrint";//отправка всех сообщений текущего пользователя включая последнее сохраненное
        const value = newMsg.phone || newMsg.fingerPrint;
        const messages = await getAllChatMessages(field, value);
        socket.emit('allChatMessages', messages)
        // const currentUser = getAgrigatedUserList().find((user) => user.sign === value);
        const currentUser = getAgrigatedUserList().find((user) => {
            console.log("userSign: ", user.sign, );
            return user.sign === value
        });

        console.log("current user: ", currentUser, "value: ", value, "field: ", field);
        if (currentUser) {
            console.log("if run: ");
            
            currentUser.connections.forEach((connection) => {
                // const socket = clients.find((client) => client.id === connection.id);
                io.to(connection.id).emit('message', newMsg);
                console.log('message', newMsg);
                console.log('connection', connection);
                
                // socket.emit('message', newMsg);
            });
        }
    });

    socket.on('disconnect', () => {
        console.log('Пользователь отключен:', socket.id);
        clients.splice(clients.indexOf(socket), 1);
        io.emit('userList', getAgrigatedUserList());
    });
});
