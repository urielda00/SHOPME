import mongoose from "mongoose";

const AddressSchema= new mongoose.Schema({
  
    userId: {
      type: String, //here will enter the user Id ||userName (because its unique).
      required: true,
    },
    addresses: {
      type: [String] //array of strings- each one represent user address. 
    } //in the client later, add optional autofill for the  addresses represented here.
} ,
{ timestamps: true });



const Address = mongoose.model("Address", AddressSchema);
export default Address;