import express from "express";
const orderRouter = express.Router();
import { createOrder, readOrders } from "../controllers/order.js";



orderRouter.post('/createOrder/:id', createOrder);
orderRouter.get('/readOrders/:id',readOrders);


export default orderRouter;
