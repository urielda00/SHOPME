import jwt from 'jsonwebtoken'; 
import dotenv from 'dotenv';
dotenv.config();



export const checkJWT= async(req,res,next)=>{
   const token= req.cookies.session_token;
   if(!token){
   return res.redirect('http://localhost:3000/login');
   }try {
    const data = jwt.verify(token, process.env.JWT_ACCESS_KEY);
    console.log(process.env.JWT_ACCESS_KEY);
    return next();
   }catch (error) {
    return res.status(403).json({message:'Bad login'})
 }
};