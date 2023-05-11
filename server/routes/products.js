import express from "express";
const productRouter = express.Router();
import {createProduct, readProducts, updateProduct, deleteProduct} from '../controllers/products.js';
import upload from "../middleware/upload.js";


productRouter.post('/createProduct',upload.single('productImage'),createProduct);
productRouter.get('/readProducts',readProducts);
productRouter.patch('/updateProduct/:id',updateProduct);
productRouter.delete('/deleteProduct/:id',deleteProduct);

export default productRouter;

