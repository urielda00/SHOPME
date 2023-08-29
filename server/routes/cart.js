import express from "express";
const cartRouter = express.Router();

//Controlers:
import { addToCart, resetCart, incrementQuantity, decrementQuantity1, decrementQuantity2, removeItem, testAdd,updateInAddToCar} from "../controllers/cart.js";


//Routes:
cartRouter.post('/updateInAddToCart',updateInAddToCar);
cartRouter.post('/addToCart', addToCart);
cartRouter.post('/resetCart', resetCart);
cartRouter.post('/incrementQuantity',incrementQuantity);
cartRouter.post('/decrementQuantity1',decrementQuantity1);
cartRouter.post('/decrementQuantity2',decrementQuantity2);
cartRouter.post('/removeItem',removeItem);
cartRouter.post('/test',testAdd);


export default cartRouter;
