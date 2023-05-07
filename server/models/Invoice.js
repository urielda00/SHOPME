import mongoose from "mongoose";

const InvoiceSchema= new mongoose.Schema({

    order: {
      type: [String], //array of orders Id from the Order schema
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    user: {
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