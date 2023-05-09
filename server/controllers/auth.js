import User from "../models/User.js";
import bcrypt from 'bcrypt';


 //Register:
 export const register = async (req,res)=>{
  try {
   const {firstName, lastName, userName, email, password ,verifyPass, phoneNumber}= req.body;
   const isUserMail = await User.findOne({email:email});
   const isUserName = await User.findOne({userName:userName});

   if(password === verifyPass){
 
   if(!isUserMail && !isUserName){ //if the user and the mail dont exists in the DB...
    
   const salt = await bcrypt.genSalt();
   const passwordHash= await bcrypt.hash(password, salt);

   const saveUser= new User({
    firstName,
    lastName, 
    userName,
    email,
    password:passwordHash,
    email,
    phoneNumber
   });
   
    await saveUser.save();
    res.status(200).json('User created successfully!!').send()

   }else{
     res.status(409).json('User not registered! (Already exist)')
   }
 }else{
    res.status(409).json('The passwords must match!!') 
 }
  
  } catch (error) {
   res.status(500).json(error)
  }
 };
 

 




 //Login:
export const login= async (req,res)=>{
  try {
  const {userName, password}= req.body;
  const user = await User.findOne({userName:userName}); 

   if(user){

    const isMatchPass=  bcrypt.compareSync(password, user.password);

    if(isMatchPass){
    
    res.status(200).json('Login succeed!');

    }else{
    res.status(500).json('Wrong User Name Or Password!');
    }

   }else{
     res.status(409).json('Wrong User Name Or Password!')  
   }
  } catch (error) {
   res.status(500).json(error)
  }
 };