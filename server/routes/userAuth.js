import express from "express";
const userAuthRouter = express.Router();
import { login, register, updateUserInfo, updateUserPass,
   deleteUser, checkCookie, signOut} from "../controllers/userAuth.js"; 

//express-validation :
import { loginValidation ,registerValidation, ValidationResult , updateUserPassValidation, deleteUserValidation}
from "../middleware/express-validator.js";


//Routes:
userAuthRouter.post('/register',registerValidation,ValidationResult,register);
userAuthRouter.post('/login',loginValidation,ValidationResult, login);
userAuthRouter.patch('/updateUserPass/:id',updateUserPassValidation,ValidationResult,updateUserPass);
userAuthRouter.delete('/deleteUser/:id',deleteUserValidation,ValidationResult,  deleteUser);
userAuthRouter.get('/signout', signOut);


//later add express-validation to this path:
userAuthRouter.patch('/updateUserInfo/:id',updateUserInfo);


//just a test for now: (delete later)
userAuthRouter.get('/cookie', checkCookie);


export default userAuthRouter;