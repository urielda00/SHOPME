import express from "express";
const orderRouter = express.Router();
import { createOrder, readOrders } from "../controllers/order.js";


//Express- validator imports:
import { createOrderValidation, ValidationResult } from "../middleware/express-validator.js";


//Routes:
orderRouter.post('/createOrder/:id',createOrderValidation,ValidationResult, createOrder);
orderRouter.get('/readOrders/:id',readOrders);


export default orderRouter;
