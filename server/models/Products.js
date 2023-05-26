import mongoose from "mongoose";

const ProductSchema= new mongoose.Schema({
    shortDescription: {
      type: String,
    },
    longDescription: {
      type: String,
    },
    price: {
      type: Number, 
      required: true,
    },
    quantity:{
      type: Number, //later- redux actions will decrease || increase this number.
    },
    productImage: String,
    status: String,
    category: String,
    productName: String
} ,
{ timestamps: true });



const Product = mongoose.model("Product", ProductSchema);
export default Product;