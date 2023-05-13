import express from "express";
const orderRouter = express.Router();
import { createOrder } from "../controllers/order.js";



orderRouter.post('/createOrder/:id', createOrder);



export default orderRouter;
