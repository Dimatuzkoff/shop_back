import express from "express";
import cors from "cors";
import Product from "../modeles/product.js";
import crypto from 'crypto';
import User from '../modeles/user.js';
import passport from "passport";
import { log } from "console";
import 'dotenv/config'
import { google } from "googleapis";
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
var router = express.Router();
const upload = multer({ dest: 'uploads/' });
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

const routeWrapper = (routeHandler) => {
    return async (req, res, next) => {
        try {
            await routeHandler(req, res, next);
        } catch (error) {
            console.error(error);
            res.status(500).send({ ok: false, message: "Server error", error });
        }
    };
};


const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const corsOptions = {
    origin: 'http://localhost:3000', // Домен вашего Nuxt приложения
    credentials: true, // Разрешает передачу куки
};

router.use(cors(corsOptions));

function generateToken() {
    return crypto.randomBytes(64).toString('hex');
}

router.all('*', (req, res, next) => {
    // console.log(req.method, req.url, req.cookies['myCookie']);
    // res.cookie('myCookie', 'cookieValue', { maxAge: 900000, httpOnly: true });
    console.log(req.cookies);
    const anonimusToken = req.cookies['anonimusToken'];

    if (!anonimusToken) {
        res.cookie('anonimusToken', generateToken(), {
            httpOnly: false,
            secure: true, // Для разработки можно использовать false, но для продакшена установите true и используйте HTTPS
            sameSite: 'None', // Требуется для кросс-доменных запросов
        });

    }
    next();
})

router.get('/auth', (req, res) => {
    const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: ['https://www.googleapis.com/auth/drive.file'],
    });
    res.redirect(authUrl);
});

// Route to handle OAuth2 callback
router.get('/oauth2callback', async (req, res) => {
    const { code } = req.query;
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    res.redirect('/upload'); // Переадресуйте на вашу страницу загрузки файла после авторизации
});

// Route to handle file upload
router.post('/api/upload', upload.single('file'), async (req, res) => {
    if (!oauth2Client.credentials) {
        return res.status(401).send('Unauthorized');
    }
    const drive = google.drive({ version: 'v3', auth: oauth2Client });
    const filePath = path.join(process.cwd(), req.file.path);
    console.log(filePath);
    try {
        const response = await drive.files.create({
            requestBody: {
                name: req.file.originalname,
                mimeType: req.file.mimetype
            },
            media: {
                mimeType: req.file.mimetype,
                body: fs.createReadStream(filePath)
            }
        });
        res.status(200).send(response.data);
        // res.status(200).send('response.data');

    } catch (error) {
        res.status(500).send(error);
    } finally {
        fs.unlinkSync(filePath);
    }
});

router.get("/api/products", async (req, res) => {
    console.log('GET PRODUCTS!!!', req.query);
    await pause(3000);
    const data = await Product.find(req.query);
    res.json(data);
});

router.post('/api/product', (req, res) => {
    console.log(req.body);

    const product = new Product(req.body);
    product.save()
        .then(() => {
            console.log('Product saved successfully');
            res.send('Product saved successfully');
        })
        .catch(error => {
            console.error('Error saving product:', error);
            res.status(500).send('Error saving product');
        });

})


router.delete("/api/product/:id", (req, res) => {
    const productId = req.params.id;
    Product.findByIdAndDelete(productId)
        .then(() => {
            console.log('Product deleted successfully');
            res.send('Product deleted successfully');
        })
        .catch(error => {
            console.error('Error deleting product:', error);
            res.status(500).send('Error deleting product');
        });
});

// роутер гет-юзерс

const getUsers = async (req, res) => {
    console.log('GET USERS!!!');
    const users = await User.find({});
    res.json(users);
};
router.get("/api/users", routeWrapper(getUsers));

// роутрер гет юзер по айди

const getUserById = async (req, res) => {
    const id = req.params.id;
    res.send(`ok + ${id}`);
}
router.get("/api/user/:id", routeWrapper(getUserById));



router.post('/api/register', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Проверяем, существует ли пользователь с таким же именем
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists.' });
        }

        // Генерируем соль
        const salt = crypto.randomBytes(16).toString('hex');

        // Хэшируем пароль
        crypto.pbkdf2(password, salt, 310000, 32, 'sha256', async (err, hashedPassword) => {
            if (err) {
                return res.status(500).json({ message: 'Error hashing password.' });
            }

            const role = () => {
                const allAdmins = process.env.ADMINS.split(',').map(elem => elem.toLowerCase());
                console.log(allAdmins);
                if (allAdmins.includes(username.toLowerCase())) {
                    return 'admin';
                } else {
                    return 'customer';
                }
            }


            // Создаем нового пользователя
            const newUser = new User({
                username,
                role: role(),
                hashed_password: hashedPassword.toString('hex'),
                salt
            });

            // Сохраняем пользователя в базе данных
            await newUser.save();

            res.status(201).json({ ok: true, message: 'User registered successfully.' });
        });
    } catch (err) {
        res.status(500).json({ message: 'Server error.' });
    }
});

// Роут для аутентификации (логина)
router.post('/api/login', passport.authenticate('local-login'), (req, res) => {
    const user = Object.create(req.user);
    user.hashed_password = undefined;
    user.salt = undefined;
    user.__v = undefined
    res.json({ ok: true, message: 'Login successful', user });
});

// Роут для выхода (логаута)
router.get('/api/logout', (req, res) => {
    req.logout();
    res.json({ ok: true, message: 'Logout successful' });
});

// Роут для проверки статуса аутентификации
router.get('/api/status', (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ authenticated: true, user: req.user });
    } else {
        res.json({ authenticated: false });
    }
});



export default router;
