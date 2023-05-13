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
   res.status(500).json(error.message)
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
   res.status(500).json(error.message)
  }
 };



 //Update user info:
 export const updateUserInfo = async (req, res) => {
  const id = req.params.id;
  const updates= req.body;
  const options= {new: true};

  try {
    const updatedUser = await User.findOneAndUpdate(id, updates, options );
    res.json(updatedUser);
  
  } catch (error) {
    res.status(500).json(error.message)
  }
};


//Update Password:
export const updateUserPass= async(req, res) => {
  const id = req.params.id;
  const user= await User.findById(id);
  const options= {new: true};
  const {password, verifyPass, insertPrePassword}=req.body; 
  const salt = await bcrypt.genSalt();

  //compare pre-password: 
  const isMatchPrePass= bcrypt.compareSync(insertPrePassword, user.password);
  try{
    if(isMatchPrePass){
      if(password === verifyPass){
        const hashedPassword= await bcrypt.hash(password, salt); //hash the new pass
        await User.findByIdAndUpdate(id, {password:hashedPassword}, options ); //send the hashed to: DB.
        res.send('User passsword updated successfully!');
      }else{
        res.status(409).json('The passwords must match!!')  
      }

    }else{
      res.status(409).json('Try Again, Wrong Password!') 
    }
  } catch (error) {
    res.status(500).json(error.message)
  }
};


//Delete User:
export const deleteUser = async(req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.json('User deleted successfully!');

  } catch (error) {
    res.status(500).json(error.message)
  }
}