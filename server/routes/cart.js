import express from "express";
const cartRouter = express.Router();

import { addToCart } from "../controllers/cart.js";

cartRouter.post('/addTocart',addToCart);



export default cartRouter;