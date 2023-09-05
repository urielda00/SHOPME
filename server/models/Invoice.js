import mongoose from "mongoose";

const InvoiceSchema= new mongoose.Schema({

    orders: {
      type: [Object], 
      required: true,
    },
    userId: {
      type: String, 
    },
} ,
{ timestamps: true });



const Invoice = mongoose.model("Invoice", InvoiceSchema);
export default Invoice;