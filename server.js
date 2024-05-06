import http from 'http';
import app from './src/app/index.js';  

const server = http.createServer(app);
console.log("Сервер работает!");

server.listen(3000)