import mongoose from "mongoose";

const CartSchema= new mongoose.Schema({
    userId: {
     type: String, 
    },
    products: {
      type: [Object], //productId,and quantity. later- add if- the item exist- so increase the quantity.
      required: true,
    },
    totalPrice:{ //every change of the amount will affect this field.
      //go to the product schema and check the price. then- loop over products obj and sum the prices
      type: Number,
      required: true,
      },
      isThereProducts:{
        type: Boolean,
        default:false,
        required: true,
      }
} ,
{ timestamps: true });



const Cart = mongoose.model("Cart", CartSchema);
export default Cart;