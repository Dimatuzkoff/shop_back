import http from 'http';
import app from './src/app/index.js';
import 'dotenv/config'
import io from './socket-server.js'

const server = http.createServer(app);
console.log("Сервер работает!");

server.listen(3001)
