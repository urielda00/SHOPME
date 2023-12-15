import express from 'express';
const cartRouter = express.Router();

//Controllers:
import * as controllers from '../Controllers/cart.js';

//Routes:

cartRouter.post('/addToCart', controllers.addToCart);
cartRouter.post('/resetCart', controllers.resetCart);
cartRouter.post('/removeItem', controllers.removeItem);
cartRouter.post('/updateInAddToCart', controllers.updateInAddToCar);
cartRouter.post('/incrementQuantity', controllers.incrementQuantity);
cartRouter.post('/decrementQuantity1', controllers.decrementQuantity1);
cartRouter.post('/decrementQuantity2', controllers.decrementQuantity2);

export default cartRouter;
