import http from 'http';
import express from 'express'; // добавлен импорт express
import app from './src/app/index.js';
import 'dotenv/config';
import { Server } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';

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

    console.log(clients.map(elem => ({ user: elem.user, id: elem.id })));

    return clients.map(elem => ({ user: elem.user, id: elem.id }));

}

io.on('connection', (socket) => {
    socket.user = 'anonimous';
    console.log('Пользователь подключен:', socket.id);
    clients.push(socket);
    console.log('Клиентов подключено:', clients.length);
    
    io.emit('userList', getUserList());

    socket.on('userInfo', (info) => {
        socket.user = info;
    })

    socket.on('getUserList', (data, callback) => {
        // const userList = clients.map(elem => ({ user: elem.user, id: elem.id }));
        const userList = getUserList();
       
        // Отправка ответа через callback
        callback(userList);
    });

    socket.on('message', (msg) => {
        console.log('Сообщение от клиента:', msg);
        io.emit('message', msg); // Рассылка сообщения всем клиентам
    });

    socket.on('disconnect', () => {
        console.log('Пользователь отключен:', socket.id);
        clients.splice(clients.indexOf(socket), 1);
        io.emit('userList', getUserList());
    });

});
