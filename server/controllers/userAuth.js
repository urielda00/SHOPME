import User from "../models/User.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UsersArchives from "../models/UsersArchives.js";
import {UserErrorLogger, UserInfoLogger} from "../middleware/winston.js";
import Cart from "../models/Cart.js";

 //Register:
 export const register = async (req,res)=>{
  try {
   const {firstName, lastName, userName, email, password ,verifyPass, phoneNumber, avatar}= req.body;
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
    avatar
   });
   

    await saveUser.save();
    UserInfoLogger.log('info','user created! status code: 201');
    res.status(201).json({message:'User created successfully!!'}).send();
   }else{
    UserErrorLogger.log('error','User already exist! status code: 409');
     res.status(409).json({message:'User already exist!'})
   }
 }else{
    UserErrorLogger.log('error','The passwords must match! status code: 409');
    res.status(409).json({message: 'The passwords must match!!'});
 }
  } catch (error) {
   UserErrorLogger.log('error', `${error.message}. status code: 500`);
   res.status(500).json(error.message)
  }
 };
 

//Register middle-form test (is exist):
export const checkIfExist = async (req,res) => {
try {
  const {data} = req.params;
  const checkEmail = await User.findOne({email:data})
  const checkUser = await User.findOne({userName:data})

  if(checkEmail || checkUser){
    res.status(200).send(['1'])
  }else{{
    res.send([]);
  }}
} catch (error) {
  UserErrorLogger.log('error', `${error.message}. status code: 500`);
  res.status(500).json(error.message)
}
}


 //Login:
export const login= async (req,res)=>{
  try {
  const {userName, password}= req.body;
  const user = await User.findOne({userName}); 
  const isAdmin = await User.findOne({$and:[{userName},{admin:'true'}]});

   if(user){
    const isMatchPass=  bcrypt.compareSync(password, user.password);
    
    if(isMatchPass){
    //JWT & SESSION: 
    const tokenData= {id: user._id};
    const token= jwt.sign(tokenData, process.env.JWT_ACCESS_KEY, {expiresIn:'1h'});
    
    if(isAdmin){
      UserInfoLogger.log('info','Login succeed, with cart! status code: 200');
      res.cookie('session-token', token, { httpOnly:false ,maxAge:   30* 60 * 1 * 1000});
      res.json({message:'Login succeed!',cart:['empty',user._id],admin:true}).status(200).send();
  
    }else{
    UserInfoLogger.log('info','Login succeed, with cart! status code: 200');
    res.cookie('session-token', token, { httpOnly:false ,maxAge:   60* 60 * 1 * 1000})
    .json({message:'Login succeed!',cart:['empty',user._id],admin:false}).status(200); 
    }

    }else{
    UserErrorLogger.log('error','Wrong UserName Or Pass! status code: 409');
     res.status(409).json({message:'Wrong UserName Or Pass!'});
    }

   }else{
     UserErrorLogger.log('error','Wrong UserName Or Pass! status code: 409');
      res.status(409).json({message:'Wrong UserName Or Pass!'})  
   }
  } catch (error) {
   UserErrorLogger.log('error',`${error.message}. status code: 500`);
   res.status(500).json(error.message)
  }
 };


//later- need to make this rout more specific about the req.body!
 //Update user info:
 export const updateUserInfo = async (req, res) => {
  const id = req.params.id;
  const updates= req.body;
  const options= {new: true};

  try {
    const updatedUser = await User.findOneAndUpdate(id, updates, options );
    UserInfoLogger.log('info','user info updated! status code: 201');
    res.status(201).json(updatedUser);
  
  } catch (error) {
    UserErrorLogger.log('error',`${error.message}. status code: 500`);
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
        UserInfoLogger.log('info','User passsword updated successfully! status code: 201');
        res.status(200).send('User passsword updated successfully!');
      }else{
        UserErrorLogger.log('error','The passwords must match! status code: 409');
        res.status(409).json('The passwords must match!!')  
      }

    }else{
      UserErrorLogger.log('error','Try Again, Wrong Password! status code: 409');
      res.status(409).json('Try Again, Wrong Password!') 
    }
  } catch (error) {
    UserErrorLogger.log('error',`${error.message}. status code: 500`);
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

    UserInfoLogger.log('info','User deleted successfully status code: 201');
    res.status(201).json('User deleted successfully!').clearCookie('session-token');
    }else{
      UserErrorLogger.log('error','Try Again, Wrong Password! status code: 409');
      res.status(409).json('Try Again, Wrong Password!')
    }
  } catch (error) {
    UserErrorLogger.log('error',`${error.message}. status code: 500`);
    res.status(500).json(error.message)
  }
}; 



//Sign- out: //later just make in the client deleting of this cookie.
export const signOut= async(req,res)=>{
  try {
    res.clearCookie('session-token');
    res.json('cookie has deleted successfully');  
  } catch (error) {
    res.status(500).json(error.message)
  }  
};


