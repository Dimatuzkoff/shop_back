import mongoose from "mongoose";

const Product = mongoose.model('Product', { name: String, price: Number });




export default Product