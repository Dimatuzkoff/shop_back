import express from "express";


const router = express.Router();

router.put("/user", (req, res) => {
    const userId = req.user._id;
    console.log(req.user);
    res.json({ ok: true, message: "User saved successfully", user: req.user });
});


// принять даггые и обновить в базе
export default router;