import mongoose from "mongoose";
const Msg = mongoose.model('Msg', {
    text: { type: String },
    timestamp: { type: String },
    fingerPrint: { type: String },
    userId: { type: String },
    direction: { type: String }
});


export default Msg