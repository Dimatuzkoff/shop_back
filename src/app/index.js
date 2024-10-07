import express from 'express';
// import router from '../routs/rest.js';
import bodyParser from 'body-parser';
import db from './db.js';
import session from 'express-session';
import passportInit from './passport.js';
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

    // Настраиваем сессии с использованием MongoDB для хранения сессий
    app.use(session({
        secret: 'your_secret_key',
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({ mongoUrl: 'mongodb+srv://dimatuzkoff:5uPMUnhRxmzsA3cx@cluster0.ogdrcr6.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0' })
    }));

    // Инициализируем Passport.js после добавления express-session middleware
    passportInit(app);

    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(express.static(path.join(rootDir, 'uploads')));

    // app.use(router);

    routs(app);

    // Middleware для обработки запросов
    // middleware 1
    app.use((req, res, next) => {
        next();
    });

    // middleware 2
    app.use((req, res) => {
        res.send('2');
    });

    // middleware 3
    app.use((req, res) => {
        res.send('3 ');
    });

    // const PORT = process.env.PORT || 3000;

    // app.listen(PORT, () => {
    //     console.log(`Server running on port ${PORT}`);
    // });
}

initializeApp();

export default app;

