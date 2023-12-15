import express from 'express';
const orderRouter = express.Router();

//Controllers:
import * as controllers from '../controllers/order.js';

//Middlewares:
import { createOrderValidation, ValidationResult } from '../middleware/express-validator.js';
import { checkJWT } from '../middleware/jwt.js';

//Routes:checkJWT
orderRouter.post('/createOrder', controllers.createOrder); //,createOrderValidation,ValidationResult
orderRouter.get('/readOrders/:id', controllers.readOrders);

export default orderRouter;
