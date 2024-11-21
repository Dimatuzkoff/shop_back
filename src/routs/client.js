import express from "express";
import Client from "../modeles/client.js";

const router = express.Router();

router.post("/client", (req, res) => {
    const client = new Client(req.body);
    client
        .save()
        .then(() => {
            console.log("Product saved successfully");
            res.send("Product saved successfully");
        })
        .catch((error) => {
            console.error("Error saving product:", error);
            res.status(500).send("Error saving product");
        });
});

router.get("/clients", async (req, res) => {
    const data = await Client.find({});
    res.json(data);
});

export default router;