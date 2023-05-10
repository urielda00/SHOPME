import mongoose from "mongoose";

const ProductSchema= new mongoose.Schema({
    // file: {
    //   type: String, //check later if there is any way to make this a path to picture.
    //   required: true,
    //   unique: true
    // },
    // price: {
    //   type: String, 
    //   required: true,
    // },
    // shortDescription: {
    //   type: String,
    // },
    // longDescription: {
    //   type: String,
    // },
    // quantity:{
    //   type: Number, //later- redux actions will decrease || increase this number.
    // },
    // filename : {
    //     type : String,
    //     unique : true,
    //     required: true
    // },
    // contentType : {
    //     type: String,
    //     required : true
    // },
    imageUrl : String
} ,
{ timestamps: true });



const Product = mongoose.model("Product", ProductSchema);
export default Product;