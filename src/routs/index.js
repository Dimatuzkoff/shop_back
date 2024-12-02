import order from "./order.js";
import rest from "./rest.js";
import user from "./user.js";
import cors from "cors";
import auth from "./auth.js";
import client from "./client.js";
import jwt from 'jsonwebtoken';
import 'dotenv/config'

const corsOptions = {
    origin: ["http://localhost:3000", "https://shop-front-nine.vercel.app"], // Домен вашего Nuxt приложения
    credentials: true, // Разрешает передачу куки
};




// Подключение маршрутов
export default function routs(app) {
    app.use(cors(corsOptions));
    app.use((req, res, next) => {

        const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
        console.log('!!!!!!!!!!!token: ', token);
        next();
        // if (token) {
        //     jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        //         if (err) {
        //             console.log('неверный токен! ');
        //             return res.status(401).json({ message: 'Неверный токен' });
        //         } else {
        //             req.user = decoded;
        //             console.log('decoded: ', req.user);
        //             const newToken = jwt.sign({ userId: user.userId }, process.env.SECRET_KEY, { expiresIn: '1m' });
        //             res.setHeader('Authorization', newToken);
        //             res.header('Access-Control-Allow-Origin', 'http://localhost:3000', 'https://shop-front-nine.vercel.app');
        //             res.header('Access-Control-Allow-Credentials', 'true');
        //             res.header('Access-Control-Expose-Headers', 'Authorization');
        //             console.log('token', token);
        //             console.log('newToken: ', newToken);
        //             next();
        //         }

        //     });
        // }

    })




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





