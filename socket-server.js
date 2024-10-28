// socketServer.js
import { Server } from 'socket.io';
import http from 'http';
import { log } from 'console';

const PORT = 3002;

// Создаем HTTP-сервер
const server = http.createServer();

// Создаем Socket.IO сервер
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "https://shop-front-nine.vercel.app"], // Укажите адрес вашего фронтенда
    methods: ['GET', 'POST'],
  },
});

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

// Запуск сервера
server.listen(PORT, () => {
  console.log(`Сокет сервер запущен на порту ${PORT}`);
});

export default io;