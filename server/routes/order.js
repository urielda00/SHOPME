import express from "express";
const orderRouter = express.Router();

//Controlers:
import { createOrder, readOrders } from "../controllers/order.js";

//Middlewares:
import { createOrderValidation, ValidationResult } from "../middleware/express-validator.js";
import { checkJWT } from "../middleware/jwt.js";

//Routes:
orderRouter.post('/createOrder/:id',createOrderValidation,ValidationResult,checkJWT, createOrder);
orderRouter.get('/readOrders/:id',checkJWT,readOrders);


export default orderRouter;
