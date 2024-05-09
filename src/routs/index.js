import express from "express";
var router = express.Router();

router.get("/user/:id",  (req, res) => {
  const id = req.params.id;
    res.send(`ok + ${id}`);
});

export default router;
