import express from "express";
const orderRouter = express.Router();

//Controlers:
import { createOrder, readOrders } from "../controllers/order.js";

//Middlewares:
import { createOrderValidation, ValidationResult } from "../middleware/express-validator.js";
import { checkJWT } from "../middleware/jwt.js";

//Routes:checkJWT
orderRouter.post('/createOrder', createOrder);  //,createOrderValidation,ValidationResult
orderRouter.get('/readOrders/:id',readOrders);


export default orderRouter;
