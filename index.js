import http from 'http';
import app from './src/app/index.js';
import 'dotenv/config'
import { Server } from 'socket.io';

const port = process.env.PORT || 3001;

const server = http.createServer(app);
console.log("Сервер работает!");
// Создаем Socket.IO сервер

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000", "https://shop-front-nine.vercel.app"],
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type"],
        credentials: true,
    },
    transports: ['polling'],  // Указываем polling для обхода ограничений прокси
});

server.listen(port)

const clients = [];

io.on('connection', (socket) => {
    console.log('Пользователь подключен:', socket.id);
    // console.log('список; ', io.sockets.sockets);
    clients.push(socket);
    console.log('Клиентов подключено:', clients.length);



    // Обработка входящих сообщений от клиента
    socket.on('message', (msg) => {
        console.log('Сообщение от клиента:', msg);
        io.emit('message', msg); // Рассылка сообщения всем клиентам
    });

    socket.on('disconnect', () => {
        console.log('Пользователь отключен:', socket.id);
        clients.splice(clients.indexOf(socket), 1);
    });
});
