import express from "express";
// import router from "express";
import cors from "cors";
import Order from "../modeles/order.js";
import User from "../modeles/user.js";
import passport from "passport";
import multer from "multer";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";
import { getNovaPoshtaData } from "../services/novaPoshtaCache.js";
import { opendirSync } from "fs";
import { getNextSequenceValue } from "../utils/db.js";

const router = express.Router();

router.post("/order", async (req, res) => {
    const number = await getNextSequenceValue("orders");
    const product = new Order({ ...req.body, number });
    product
        .save()
        .then(() => {
            console.log("Order saved successfully");
            console.log(req.body);
            res.json({ ok: true, message: "Order saved successfully" });
        })
        .catch((error) => {
            console.error("Error saving order:", error);
            res.status(500).send("Error saving order");
        });
});

router.get("/orders", async (req, res) => {
    const data = await Order.find(req.query);
    res.json(data);
});

export default router;

