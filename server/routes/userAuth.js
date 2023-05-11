import express from "express";
const userAuthRouter = express.Router();
import { login, register, updateUserInfo, updateUserPass} from "../controllers/userAuth.js"; 



userAuthRouter.post('/register',register);
userAuthRouter.post('/login', login);
userAuthRouter.patch('/updateUserInfo/:id',updateUserInfo);
userAuthRouter.patch('/updateUserPass/:id',updateUserPass);

export default userAuthRouter;
