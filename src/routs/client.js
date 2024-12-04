import express from "express";
import Client from "../modeles/client.js";

const router = express.Router();

router.post("/client", (req, res) => {
    const client = new Client(req.body);
    client.__v = undefined;
    client
        .save()
        .then(() => {
            res.send("client saved successfully");
        })
        .catch((error) => {
            res.status(500).send("Error saving client");
        });
});

router.get("/clients", async (req, res) => {
    const data = await Client.find({});
    res.json(data);
});

export default router;