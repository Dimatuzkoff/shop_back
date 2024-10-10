import mongoose from "mongoose";
const User = mongoose.model('User', {
    username: { type: String, required: true, unique: true },
    role: { type: String, default: 'customer' },
    hashed_password: { type: String, required: true },
    salt: { type: String, required: true },
    phone: { type: String, unique: true },
    email: { type: String, unique: true },
    name: { type: String },
    surname: { type: String },
});


export default User