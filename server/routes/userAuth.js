import express from "express";
const userAuthRouter = express.Router();

//Controllers:
import { login,
         register,
         updateUserInfo,
         updateUserPass,
         deleteUser,
         checkIfExist
       } 
from "../controllers/userAuth.js"; 



//Middlewares:
import { loginValidation,
         registerValidation,
         ValidationResult,
         updateUserPassValidation,
         deleteUserValidation
      }
from "../middleware/express-validator.js";




//Routes:
userAuthRouter.get('/checkIfExist/:data',checkIfExist); 

userAuthRouter.post('/register',registerValidation,ValidationResult,register);
userAuthRouter.post('/login',loginValidation,ValidationResult, login);


userAuthRouter.patch('/updateUserPass/:id',
updateUserPassValidation,ValidationResult,updateUserPass);

userAuthRouter.delete('/deleteUser/:id',deleteUserValidation,ValidationResult, deleteUser);


//optional route- the basic logic is implemented, but no user interface. (later nta validation)
userAuthRouter.patch('/updateUserInfo/:id',updateUserInfo);


export default userAuthRouter;