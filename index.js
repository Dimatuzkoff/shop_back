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
        const userPhone = connection.user?.phone;
        const fingerprint = connection.fingerprint;
        const sign = userPhone || fingerprint;

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

async function getAgrigatedMsgsList() {
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
        let read = true;
        msgs.forEach(msg => {
            if (msg.phone) {
                if (msg.phone == item && !msg.isRead && msg.direction == 'from user') {
                    read = false;
                }
            }
        })
        list.push({ phone: item, isRead: read })
    })

    arrFingerPrint.forEach((item) => {
        let read = true;
        msgs.forEach(msg => {
            if (msg.fingerPrint) {
                if (msg.fingerPrint == item && !msg.isRead && msg.direction == 'from user') {
                    read = false;
                }
            }
        })
        list.push({ fingerPrint: item, isRead: read })
    })

    return list

}

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

    socket.on('readAllAdminMsgs', async (data) => {
        const field = data.phone ? "phone" : "fingerPrint";
        const value = data.phone || data.fingerPrint;
        let messages = await getAllChatMessages(field, value);
        for (const elem of messages) {
            if (!elem.isRead && elem.direction == 'from user') {
                await Msg.updateOne({ _id: elem._id }, { isRead: true });
            }
        }
        const list = await getAgrigatedMsgsList()
        if (list.length > 0) socket.emit('getMsgsList', list)
    })

    socket.on('readAllUserMsgs', async (data) => {
        const field = data.phone ? "phone" : "fingerPrint";
        const value = data.phone || data.fingerPrint;
        let messages = await getAllChatMessages(field, value);
        for (const elem of messages) {
            if (!elem.isRead && elem.direction == 'to user') {
                await Msg.updateOne({ _id: elem._id }, { isRead: true });
            }
        }
        messages = await getAllChatMessages(field, value);
        socket.emit('allChatMessages', messages)
    })


    socket.on('getMsgsListKick', async () => {
        const list = await getAgrigatedMsgsList()
        if (list.length > 0) socket.emit('getMsgsList', list)

    })

    socket.on('message', async (msg) => {
        const newMsg = new Msg(msg);
        await newMsg.save();

        getAgrigatedUserList().forEach((user) => {
            if (user.user.role == 'admin') {
                user.connections.forEach((connection) => {
                    if (connection) io.to(connection.id).emit('sendToAdmins', newMsg);
                })
            }
        });

        const value = newMsg.phone || newMsg.fingerPrint;
        const currentUser = getAgrigatedUserList().find((user) => {
            return user.sign === value
        });

        if (currentUser) {
            currentUser.connections.forEach((connection) => {
                io.to(connection.id).emit('message', newMsg);
            });
        }
    });

    socket.on('disconnect', () => {
        console.log('Пользователь отключен:', socket.id);
        clients.splice(clients.indexOf(socket), 1);
        io.emit('userList', getAgrigatedUserList());
    });
});
