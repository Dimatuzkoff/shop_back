import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({

    // user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    guestContact: {
        username: String,
        name: String,
        email: String,
        phone: String
    },
    products: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: Number
        },
    ],
    totalPrice: Number,
    delivery: {
        city: String,
        department: String,
    },

});

const Order = mongoose.model('Order', OrderSchema);

export default Order;
