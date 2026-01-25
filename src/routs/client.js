import express from "express";
import Client from "../modeles/client.js";

const router = express.Router();

router.post("/client", (req, res) => {
    const client = new Client(req.body);
    client
        .save()
        .then(() => {
            res.json(client);
        })
        .catch((error) => {
            res.status(500).send("Error saving client");
        });
});

router.put("/client", async (req, res) => {
    try {
        const id = req.body._id;
        const client = await Client.findByIdAndUpdate(id, req.body, { new: true });
        res.json(client);
    } catch (error) {
        console.error("Error updating client:", error);
        res.status(500).send({ message: "Error updating client" });
    }
});

router.delete("/client/:id", (req, res) => {
    const clientId = req.params.id;
    Client.findByIdAndDelete(clientId)
        .then(() => {
            console.log("Client deleted successfully");
            res.send({ message: "Client deleted successfully" });
        })
        .catch((error) => {
            console.error("Error deleting client:", error);
            res.status(500).send("Error deleting client");
        });
});

router.get("/clients", async (req, res) => {
    const data = await Client.find({});
    res.json(data);
});

router.get("/client/:id", async (req, res) => {
    try {
        const data = await Client.findById(req.params.id);
        if (!data) {
            return res.status(404).json({ message: "Client not found" });
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

export default router;