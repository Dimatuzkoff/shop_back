import order from "./order.js";
import rest from "./rest.js";
import user from "./user.js";
import cors from "cors";
import auth from "./auth.js";
import client from "./client.js";
import jwt from 'jsonwebtoken';
import 'dotenv/config'

const corsOptions = {
    origin: ["http://localhost:3000",
        "https://shop-front-nine.vercel.app",
        "https://galka-travinskaya.github.io"], // Домен вашего Nuxt приложения
    credentials: true, // Разрешает передачу куки
};


// Подключение маршрутов
export default function routes(app) {
    app.use(cors(corsOptions));
    app.use((req, res, next) => {
        // Извлечение токена из заголовка Authorization
        const token = req.headers['authorization']?.split(' ')[1];
        if (token) {

            jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
                if (err) {
                    return res.status(401).json({ message: 'Invalid token' });
                } else {
                    // Токен успешно декодирован
                    req.user = decoded;

                    // Генерация нового токена
                    const newToken = jwt.sign(
                        { userId: req.user.userId }, // Используем userId из декодированного токена
                        process.env.SECRET_KEY,
                        { expiresIn: '15m' }
                    );

                    // Установка нового токена в заголовок ответа
                    res.setHeader('Authorization', `${newToken}`);

                    // CORS настройки для работы заголовков
                    res.header('Access-Control-Allow-Origin', 'http://localhost:3000', 'https://shop-front-nine.vercel.app');
                    res.header('Access-Control-Allow-Credentials', 'true');
                    res.header('Access-Control-Expose-Headers', 'Authorization');

                    next();
                }
            });
        } else {
            res.setHeader('Authorization', null);

            next();
        }
    });

    //   app.use("/api", authRoutes);
    // app.use("/api", productRoutes);
    // app.use("/api", fileRoutes);
    // app.use("/api", userRoutes);
    // app.use("/api", novaPoshtaRoutes);
    app.use("/api", auth);
    app.use("/api", rest);
    app.use("/api", order);
    app.use("/api", user);
    app.use("/api", client);

}






