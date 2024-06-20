import http from 'http';
import app from './src/app/index.js';
import 'dotenv/config'

const server = http.createServer(app);
console.log("Сервер работает!");

server.listen(3001)