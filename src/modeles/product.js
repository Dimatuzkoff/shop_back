import mongoose from "mongoose";

const Product = mongoose.model('Product', { 
  name: String, 
  price: Number,
  description: String,
  image: [],
  mainImagePointer: {type: Number, default: 0},
  category: String,
  subcategory: String
});




export default Product