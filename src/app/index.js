import express from 'express';
import bodyParser from 'body-parser';
import db from './db.js';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import cookieParser from 'cookie-parser';
import path from "path";
import { fileURLToPath } from 'url';
import routs from '../routs/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '../../');

console.log('Корневая директория:', rootDir);

const app = express();

async function initializeApp() {
    // Подключаемся к базе данных
    const mongooseConnection = await db();


    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static(path.join(rootDir, 'uploads')));

    routs(app);

    // Middleware пример пустого мидлвара
    app.use((req, res, next) => {
        next();
    });

    // middleware последний (когда не найденный роут)
    app.use((req, res) => {
        res.status(404).send('Бла, мимо....');
    });


}

initializeApp();

export default app;

