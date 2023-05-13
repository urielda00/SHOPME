import mongoose from "mongoose";

const OrderSchema= new mongoose.Schema({

    address: {
      type: String, //maby add option to choose 
      //if user want existing address or add new one.
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    userId: {
      type: String, //takind the user name here ||userId
      required: true,
    },
    productsId: {
      type: [Object], //take the productsId from the products schema
      required: true,
    },
    totalPrice: {
      type: Number
    }
} ,
{ timestamps: true });



const Order = mongoose.model("Order", OrderSchema);
export default Order;