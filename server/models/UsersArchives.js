import mongoose from "mongoose";

const UsersArchivesSchema= new mongoose.Schema({
    _id: String,
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    userName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      max: 50,
    },
    phoneNumber:{
      type: Number, 
      required: true
    },
    invoices:{
      type:[String],
      required: false,
    }, 
} ,
{ timestamps: true });



const UsersArchives = mongoose.model("UsersArchives", UsersArchivesSchema);
export default UsersArchives;