import mongoose from "mongoose";

const InvoiceSchema= new mongoose.Schema({

    orders: {
      type: [Object], //array of orders Id from the Order schema, all the orders belong to the specific user.
      required: true,
    },
    date: {
      type: String,
    },
    userId: {
      type: String, //the userId here ||userName (because its unique).
    },
    totalPrice: {
      type: Number, //take the totalPrice value from the order schema
      required: true,
      }
} ,
{ timestamps: true });



const Invoice = mongoose.model("Invoice", InvoiceSchema);
export default Invoice;