import express from "express";
const productRouter = express.Router();
import {createProduct} from '../controllers/products.js';
import upload from "../middleware/upload.js";


productRouter.post('/createProduct',upload.single('avatar'),createProduct);

export default productRouter;

