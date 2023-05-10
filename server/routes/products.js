import express from "express";
const productRouter = express.Router();
import {createProduct, readProducts} from '../controllers/products.js';
import upload from "../middleware/upload.js";


productRouter.post('/createProduct',upload.single('productImage'),createProduct);
productRouter.get('/readProducts',readProducts);



export default productRouter;

