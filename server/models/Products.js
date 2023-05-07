import mongoose from "mongoose";

const ProductSchema= new mongoose.Schema({

    image: {
      type: String, //check later if there is any way to make this a path to picture.
      required: true,
      unique: true
    },
    price: {
      type: String, 
      required: true,
    },
    shortDescription: {
      type: String,
    },
    longDescription: {
      type: String,
    },
    amount:{
      type: Number, //later- redux actions will decrease || increase this number.
    },
} ,
{ timestamps: true });



const Product = mongoose.model("Product", ProductSchema);
export default Product;