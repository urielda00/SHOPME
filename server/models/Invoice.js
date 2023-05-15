import mongoose from "mongoose";

const InvoiceSchema= new mongoose.Schema({

    orders: {
      type: [Object], 
      required: true,
    },
    date: {
      type: String,
    },
    userId: {
      type: String, 
    },
    totalPrice: {
      type: Number,
      required: true,
      }
} ,
{ timestamps: true });



const Invoice = mongoose.model("Invoice", InvoiceSchema);
export default Invoice;