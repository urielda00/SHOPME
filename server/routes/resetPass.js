import express from "express";
const resetPassRouter = express.Router();


//Controllers:
import { sendLink, verifyUrl, resetPass } from "../controllers/resetPass.js";

//Middlewares:
// need to add input validation, and password front validation (length and more..)

resetPassRouter.post("/", sendLink);
resetPassRouter.get("/reset/:id/:token", verifyUrl);
resetPassRouter.post("/reset/:id/:token", resetPass);

export default resetPassRouter;