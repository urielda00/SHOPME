import express from "express";
const userAuthRouter = express.Router();

//Controllers:
import { login,
         register,
         updateUserInfo,
         updateUserPass,
         deleteUser,
         signOut
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
import { checkJWT } from "../middleware/jwt.js";




//Routes:
userAuthRouter.post('/register',registerValidation,ValidationResult,register);

userAuthRouter.post('/login',loginValidation,ValidationResult, login);

userAuthRouter.patch('/updateUserPass/:id',
updateUserPassValidation,ValidationResult,checkJWT,updateUserPass);

userAuthRouter.delete('/deleteUser/:id',deleteUserValidation,ValidationResult,checkJWT, deleteUser);




//later add express-validation to this path:
userAuthRouter.patch('/updateUserInfo/:id',checkJWT,updateUserInfo);





//later- delete this route, and make the logout from the client side.
userAuthRouter.post('/signout',signOut);

export default userAuthRouter;