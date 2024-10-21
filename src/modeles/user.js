import mongoose from "mongoose";
const User = mongoose.model('User', {
    phone: { type: String, required: true, unique: true },
    role: { type: String, default: 'customer' },
    hashed_password: { type: String, required: true },
    salt: { type: String, required: true },
    email: { type: String },
    name: { type: String },
    surname: { type: String },
});


export default User