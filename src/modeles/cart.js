import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({

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
  ]
  
});

const Cart = mongoose.model('Cart', CartSchema);

export default Cart;
