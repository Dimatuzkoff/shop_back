import mongoose from "mongoose";
const User = mongoose.model('User', {
    username: { type: String, required: true, unique: true },
    hashed_password: { type: String, required: true },
    salt: { type: String, required: true }
});


export default User