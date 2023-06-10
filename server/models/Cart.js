import mongoose from "mongoose";

const CartSchema= new mongoose.Schema({
    userId: {
     type: String, 
    },
    products: {
      type: [obj], //productId,and quantity. later- add if- the item exist- so increase the quantity.
      required: true,
    },
    totalPrice: { //every change of the amount will affect this field.
      type: Number,
      required: true,
      }
} ,
{ timestamps: true });



const Cart = mongoose.model("Cart", CartSchema);
export default Cart;