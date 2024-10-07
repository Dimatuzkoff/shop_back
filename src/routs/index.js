import order from "./order.js"; 
import rest from "./rest.js";


// Подключение маршрутов
export default function routs(app)  {
//   app.use("/api", authRoutes);
// app.use("/api", productRoutes);
// app.use("/api", fileRoutes);
// app.use("/api", userRoutes);
// app.use("/api", novaPoshtaRoutes);
app.use("/api", rest);
app.use("/api", order);
} 

