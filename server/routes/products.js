import express from "express";
const productRouter = express.Router();
import {createProduct} from '../controllers/products.js';

productRouter.post('/createProduct',createProduct);

export default productRouter;