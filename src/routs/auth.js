import express from "express";
import crypto from "crypto";
import passport from "passport";
import User from "../modeles/user.js";

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
                console.log(allAdmins);
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

// Роут для аутентификации (логина)
router.post("/login", passport.authenticate("local-login"), async (req, res) => {
    const user = Object.create(req.user);
    user.token = generateToken();
    const refreshedUser = await User.findByIdAndUpdate(user._id, { token: user.token });
    refreshedUser.__v = undefined;
    refreshedUser.salt = undefined;
    refreshedUser.hashed_password = undefined;
    res.json({ ok: true, message: "Login successful", user: refreshedUser });
});

// Роут для выхода (логаута)
router.get("/logout", (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
    });
    res.json({ ok: true, message: "Logout successful" });
});

// Роут для проверки статуса аутентификации
router.get("/status", (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ authenticated: true, user: req.user });
    } else {
        res.json({ authenticated: false });
    }
});


router.get("/profile", (req, res) => {
    console.log('req.user: ', req.user);
    
    res.json({ data: req.user, ok: true });

});

export default router;
