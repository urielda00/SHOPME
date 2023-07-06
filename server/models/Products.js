import mongoose from "mongoose";

const ProductSchema= new mongoose.Schema({
    image: String,
    category: String,
    productName: String,
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
    productImages: [String],
    status: String,
    company: String,
    releaseYear:Number,
    os:String,
    brand:String,
} ,
{ timestamps: true });



const Product = mongoose.model("Product", ProductSchema);
export default Product;