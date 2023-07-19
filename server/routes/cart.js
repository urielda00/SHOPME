import express from "express";
const cartRouter = express.Router();

//Controlers:
import { addToCart, resetCart, incrementQuantity, decrementQuantity, removeItem} from "../controllers/cart.js";


//Routes:
cartRouter.post('/addToCart', addToCart);
cartRouter.post('/resetCart', resetCart);
cartRouter.post('incrementQuantity',incrementQuantity);
cartRouter.post('decrementQuantity',decrementQuantity);
cartRouter.post('removeItem',removeItem);


export default cartRouter;
