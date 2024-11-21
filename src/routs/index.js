import order from "./order.js";
import rest from "./rest.js";
import user from "./user.js";
import cors from "cors";
import auth from "./auth.js";
import client from "./client.js";
const corsOptions = {
    origin: ["http://localhost:3000", "https://shop-front-nine.vercel.app", "file:///D:/projects/!Pasha/migration/files/ru/index.html"], // Домен вашего Nuxt приложения
    credentials: true, // Разрешает передачу куки
};




// Подключение маршрутов
export default function routs(app) {
    app.use(cors(corsOptions));
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





