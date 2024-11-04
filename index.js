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
const staticPath = path.resolve(__dirname, 'dist');

console.log("Статический путь: ", staticPath);

app.use(express.static(staticPath));

const server = http.createServer(app);
console.log("Сервер работает на порту " + port);

const io = new Server(server, {
    cors: {
        origin: process.env.NODE_ENV === 'production' 
            ? ["https://shop-front-nine.vercel.app"] 
            : ["http://localhost:3000"],
        methods: ["GET", "POST"],
    },
});

server.listen(port);

const clients = [];

io.on('connection', (socket) => {
    console.log('Пользователь подключен:', socket.id);
    clients.push(socket);
    console.log('Клиентов подключено:', clients.length);

    socket.on('message', (msg) => {
        console.log('Сообщение от клиента:', msg);
        io.emit('message', msg); // Рассылка сообщения всем клиентам
    });

    socket.on('disconnect', () => {
        console.log('Пользователь отключен:', socket.id);
        clients.splice(clients.indexOf(socket), 1);
    });

    if (process.env.NODE_ENV === 'production') {
        app.get("*", (req, res) => {
            res.sendFile(path.join(staticPath, "index.html"));
        });
    }
});
