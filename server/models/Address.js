import mongoose from "mongoose";

const AddressSchema= new mongoose.Schema({
  
    userId: {
      type: String, 
      required: true,
    },
    addresses: {
      type: [String] //todo: add optional autofill for the  addresses represented here.
    } 
} ,
{ timestamps: true });



const Address = mongoose.model("Address", AddressSchema);
export default Address;