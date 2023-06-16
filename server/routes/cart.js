import express from "express";
const cartRouter = express.Router();

import { addToCart } from "../controllers/cart.js";

cartRouter.post('/addToCart',addToCart);



export default cartRouter;