import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UsersArchives from "../models/UsersArchives.js";

 //Register:
 export const register = async (req,res)=>{
  try {
   const {firstName, lastName, userName, email, password ,verifyPass, phoneNumber}= req.body;
   const isUserMail = await User.findOne({email});
   const isUserName = await User.findOne({userName});

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
    phoneNumber,
   });
   
    await saveUser.save();
    res.status(200).json({message:'User created successfully!!'}).send()

   }else{
     res.status(409).json({message:'User not registered! (Already exist)'})
   }
 }else{
    res.status(409).json({message: 'The passwords must match!!'}) 
 }
  
  } catch (error) {
   res.status(500).json(error.message)
  }
 };
 

 




 //Login:
export const login= async (req,res)=>{
  try {
  const {userName, password}= req.body;
  const user = await User.findOne({userName}); 

   if(user){

    const isMatchPass=  bcrypt.compareSync(password, user.password);

    if(isMatchPass){
  

    //JWT & SESSION:
    const tokenData= {
     id: user._id,
     role: 'user'
    };
    const token= jwt.sign(tokenData, process.env.JWT_KEY, {expiresIn: 60*60*2* 1000});
    res.cookie('session-token', token, {maxAge: 60 * 60 * 2 * 1000}).json({message:'Login succeed!'});
    res.status(200).end();

    }else{
    res.status(500).json({message:'Wrong User Name Or Password!'});
    }

   }else{
     res.status(409).json({message:'Wrong User Name Or Password!'})  
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


//Update User Password:
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
  try {
    const id = req.params.id;
    const {password}= req.body;
    const user = await User.findById(id);
    const isMatchPass=  bcrypt.compareSync(password, user.password);
    if(isMatchPass){
    const saveUsersArchives= new UsersArchives({
    _id: id,
    firstName: user.firstName,
    lastName: user.lastName,
    userName: user.userName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    invoices: user.invoices
    })
    await saveUsersArchives.save();
    await User.findByIdAndDelete(id);

    res.json('User deleted successfully!');
    }else{
      res.status(409).json('Try Again, Wrong Password!')
    }
  } catch (error) {
    res.status(500).json(error.message)
  }
}; 





//Cookie-test
export const checkCookie= async(req,res)=>{
   const {session_token}= req.cookies;
  try {
    const userData= jwt.verify(session_token, process.env.JWT_KEY); 
    const user= await User.findById(userData.id);
    delete user.password;

    console.log(user)
  } catch (error) {
    res.status(500).json({message:'Bad login'})
  }
}
