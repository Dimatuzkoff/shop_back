import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({

    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    guestContact: {
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
        address: {
            city: String,
            street: String,
            house: String
        },
        department: Number,

    },

});

const Order = mongoose.model('Order', OrderSchema);

export default Order;
