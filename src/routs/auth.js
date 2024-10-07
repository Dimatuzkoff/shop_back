import express from "express";
import crypto from "crypto";
import passport from "passport";
import User from "../modeles/user.js";

const router = express.Router();

const generateToken = () => {
    return crypto.randomBytes(64).toString("hex");
};

// Регистрация
router.post("/register", async (req, res) => {
    // Логика регистрации
});

// Логин
router.post("/login", passport.authenticate("local-login"), (req, res) => {
    // Логика логина
});

// Логаут
router.get("/logout", (req, res) => {
    // Логика логаута
});

// Статус аутентификации
router.get("/status", (req, res) => {
    // Логика проверки статуса
});

export default router;
