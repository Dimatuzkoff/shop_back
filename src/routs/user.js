import express from "express";
import User from "../modeles/user.js";
import { routeWrapper } from "../utils/router.js";

const router = express.Router();

router.put("/user", async (req, res) => {
    const userId = req.user._id;
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
    res.json({ ok: true, message: "User saved successfully", user: updatedUser });
});

// роутер гет-юзерс

const getUsers = async (req, res) => {
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


// принять даггые и обновить в базе
export default router;