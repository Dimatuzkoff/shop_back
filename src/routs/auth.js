import express from "express";
import crypto from "crypto";
import User from "../modeles/user.js";
import jwt from 'jsonwebtoken';
import 'dotenv/config'
import { authGuard } from '../utils/router.js'
import { log } from "console";
const router = express.Router();

const generateToken = () => {
    return crypto.randomBytes(64).toString("hex");
};

router.post("/register", async (req, res) => {
    const { phone, password } = req.body;

    try {
        // Проверяем, существует ли пользователь с таким же именем
        const existingUser = await User.findOne({ phone });
        if (existingUser) {
            return res.status(400).json({ message: "Phone already exists." });
        }

        // Генерируем соль
        const salt = crypto.randomBytes(16).toString("hex");

        // Хэшируем пароль
        crypto.pbkdf2(password, salt, 310000, 32, "sha256", async (err, hashedPassword) => {
            if (err) {
                return res.status(500).json({ message: "Error hashing password." });
            }

            const role = () => {
                const allAdmins = process.env.ADMINS.split(",").map((elem) => elem.toLowerCase());
                if (allAdmins.includes(phone)) {
                    return "admin";
                } else {
                    return "customer";
                }
            };

            // Создаем нового пользователя
            const newUser = new User({
                phone,
                role: role(),
                hashed_password: hashedPassword.toString("hex"),
                salt,
            });

            // Сохраняем пользователя в базе данных
            await newUser.save();

            res.status(201).json({ ok: true, message: "User registered successfully." });
        });
    } catch (err) {
        res.status(500).json({ message: "Server error." });
    }
});

router.post("/login", async (req, res) => {
    const { phone, password } = req.body;
    const user = await User.findOne({ phone });
    if (!user) {
        return res.json({ message: 'Incorrect phone or password.', ok: false });
    } else {
        crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', (err, hashedPassword) => {
            if (err) return res.json({ message: 'Something wrong', ok: false });

            const isPasswordValid = crypto.timingSafeEqual(
                Buffer.from(user.hashed_password, 'hex'),
                hashedPassword
            );

            if (!isPasswordValid) {
                return res.json({ message: 'Incorrect phone or password.', ok: false });
            } else {
                const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1m' });
                user.hashed_password = undefined;
                user.__v = undefined;
                user.salt = undefined;
                res.setHeader('Authorization', `${token}`);

                res.header('Access-Control-Allow-Origin', 'http://localhost:3000', 'https://shop-front-nine.vercel.app');
                res.header('Access-Control-Allow-Credentials', 'true');
                res.header('Access-Control-Expose-Headers', 'Authorization');
                res.json({ user, ok: true });
            }

        });
    }
})

// Роут для выхода (логаута)
// router.get("/logout", (req, res, next) => {
//     req.logout(function (err) {
//         if (err) {
//             return next(err);
//         }
//     });
//     res.json({ ok: true, message: "Logout successful" });
// });

router.get("/profile", authGuard, async (req, res) => {
    const user = await User.findOne({ _id: req.user.userId });
    user.hashed_password = undefined;
    user.__v = undefined;
    user.salt = undefined;
    res.json({ user, ok: true });
});

export default router;
