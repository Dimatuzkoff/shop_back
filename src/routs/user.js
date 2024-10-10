import express from "express";
import User from "../modeles/user.js";


const router = express.Router();

router.put("/user", async (req, res) => {
    const userId = req.user._id;
    console.log(req.user);
    const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
    res.json({ ok: true, message: "User saved successfully", user: updatedUser });
});


// принять даггые и обновить в базе
export default router;