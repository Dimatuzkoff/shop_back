import mongoose from "mongoose";

const Product = mongoose.model('Product', { 
  name: String, 
  price: Number,
  description: String,
  image: [],
  category: String,
  subcategory: String
});




export default Product