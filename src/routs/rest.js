import express from "express";
import Product from "../modeles/product.js";
import crypto from "crypto";
import User from "../modeles/user.js";
import passport from "passport";
import "dotenv/config";
import multer from "multer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";
import { getNovaPoshtaData } from "../services/novaPoshtaCache.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();

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

// Конфигурация хранения файлов с Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // Папка, куда будут сохраняться файлы
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname); // Получаем расширение файла
        const randomName = uuidv4(); // Генерация случайного имени
        cb(null, randomName + ext); // Устанавливаем имя файла с расширением
    },
});

const upload = multer({ storage: storage });

// Маршрут для поиска городов по частичной строке
router.get("/search-cities", async (req, res) => {
    const searchTerm = req.query.q;

    if (!searchTerm) {
        return res.status(400).json({ ok: false, message: "Строка поиска обязательна" });
    }

    const endpoint = "getCities";
    const params = {
        modelName: "AddressGeneral",
        calledMethod: "searchSettlements",
        methodProperties: {
            CityName: searchTerm,
            Limit: 10,
            Language: "ru",
        },
    };

    try {
        const cities = await getNovaPoshtaData(params);
        res.json({ ok: true, cities });
    } catch (error) {
        console.error("Ошибка при поиске городов:", error);
        res.status(500).json({
            ok: false,
            // message: "Ошибка при поиске городов",
            error: error,
        });
    }
});

router.get(
    "/search-departments",
    routeWrapper(async (req, res) => {
        const CityRef = req.query.CityRef;

        if (!CityRef) {
            return res.status(400).json({ ok: false, message: "CityRef is required" });
        }

        const params = {
            modelName: "AddressGeneral",
            calledMethod: "getWarehouses",
            methodProperties: {
                CityRef,
                Limit: 50,
                Language: "ru",
                Page: "1",
            },
        };

        try {
            console.log("Запрос на получение отделений с параметрами:", params); // Логируем параметры
            const departments = await getNovaPoshtaData(params);

            // Проверяем, возвращает ли API ожидаемую структуру
            if (!departments || !Array.isArray(departments)) {
                return res.status(404).json({ ok: false, message: "Отделения не найдены" });
            }

            res.json({ ok: true, departments });
        } catch (error) {
            console.error("Ошибка при поиске отделений:", error);
            res.status(500).json({ ok: false, message: "Ошибка при поиске отделений", error });
        }
    })
);


// Маршрут для загрузки одного файла !!!!!! API на фронте добавить
router.post("/upload-single", upload.single("file"), (req, res) => {
    res.json({ filename: req.file.filename });
});

// Маршрут для загрузки нескольких файлов  !!!!!! API на фронте добавить
router.post("/upload-multiple", upload.array("files", 10), (req, res) => {
    const filenames = req.files.map((file) => file.filename);
    res.json({ filenames });
});

router.get("/uploaded-files", async (req, res) => {
    try {
        const files = await fs.promises.readdir(__dirname + "/../../uploads/");

        res.json({ data: files });
    } catch (error) {
        console.error("Error reading directory:", error);
        res.status(500).json({ error: "Failed to retrieve files" });
    }
});

function generateToken() {
    return crypto.randomBytes(64).toString("hex");
}

router.all("*", (req, res, next) => {
    // console.log(req.method, req.url, req.cookies['myCookie']);
    // res.cookie('myCookie', 'cookieValue', { maxAge: 900000, httpOnly: true });
    console.log(req.cookies);
    const anonimusToken = req.cookies["anonimusToken"];

    if (!anonimusToken) {
        res.cookie("anonimusToken", generateToken(), {
            httpOnly: false,
            secure: true, // Для разработки можно использовать false, но для продакшена установите true и используйте HTTPS
            sameSite: "None", // Требуется для кросс-доменных запросов
        });
    }
    next();
});

router.get("/products", async (req, res) => {
    console.log("GET PRODUCTS!!!", req.query);
    const data = await Product.find(req.query);
    res.json(data);
});

router.get("/product/:id", async (req, res) => {
    const id = req.params.id;
    const data = await Product.findById(id);
    res.json(data);
});

router.put("/product", async (req, res) => {
    try {
        const id = req.body._id;
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        res.json(product);
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).send("Error updating product");
    }
});

router.post("/product", (req, res) => {
    const product = new Product(req.body);
    product
        .save()
        .then(() => {
            console.log("Product saved successfully");
            res.send("Product saved successfully");
        })
        .catch((error) => {
            console.error("Error saving product:", error);
            res.status(500).send("Error saving product");
        });
});

router.delete("/product/:id", (req, res) => {
    const productId = req.params.id;
    Product.findByIdAndDelete(productId)
        .then(() => {
            console.log("Product deleted successfully");
            res.send("Product deleted successfully");
        })
        .catch((error) => {
            console.error("Error deleting product:", error);
            res.status(500).send("Error deleting product");
        });
});

// роутер гет-юзерс

const getUsers = async (req, res) => {
    console.log("GET USERS!!!");
    const users = await User.find({});
    res.json(users);
};
router.get("/users", routeWrapper(getUsers));

// роутрер гет юзер по айди

const getUserById = async (req, res) => {
    const id = req.params.id;
    res.send(`ok + ${id}`);
};
router.get("/user/:id", routeWrapper(getUserById));

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
router.post("/login", passport.authenticate("local-login"), (req, res) => {
    console.log('Мы тутуа');
    const user = Object.create(req.user);
    user.hashed_password = undefined;
    user.salt = undefined;
    user.__v = undefined;
    res.json({ ok: true, message: "Login successful", user });
});

// Роут для выхода (логаута)
router.get("/logout", (req, res) => {
    req.logout();
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

export default router;
