import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String
});

const Client = mongoose.model('Client', ClientSchema);

export default Client;