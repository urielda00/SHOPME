import express from "express";
const cartRouter = express.Router();

//Controlers:
import { addToCart, resetCart, incrementQuantity, decrementQuantity, removeItem, testAdd} from "../controllers/cart.js";


//Routes:
cartRouter.post('/addToCart', addToCart);
cartRouter.post('/resetCart', resetCart);
cartRouter.post('incrementQuantity',incrementQuantity);
cartRouter.post('decrementQuantity',decrementQuantity);
cartRouter.post('removeItem',removeItem);
cartRouter.post('/test',testAdd);


export default cartRouter;
