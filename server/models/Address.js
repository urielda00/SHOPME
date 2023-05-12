import mongoose from "mongoose";

const AddressSchema= new mongoose.Schema({
  
    user: {
      type: String, //here will enter the user Id ||userName (because its unique).
      required: true,
    },
    address: {
      type: [String] //array of strings- each one represent user address. 
    }
} ,
{ timestamps: true });



const Address = mongoose.model("Address", AddressSchema);
export default Address;