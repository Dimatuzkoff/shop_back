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

const router = express.Router();

router.post("/api/order", (req, res) => {
  const product = new Order(req.body);
  product
      .save()
      .then(() => {
          console.log("Order saved successfully");
          res.send("Order saved successfully");
      })
      .catch((error) => {
          console.error("Error saving product:", error);
          res.status(500).send("Error saving product");
      });
});

export default router;

