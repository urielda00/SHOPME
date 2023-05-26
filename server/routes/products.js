import express from "express";
const productRouter = express.Router();
import {createProduct, readProducts,
        updateProduct, deleteProduct}
 from '../controllers/products.js';


//input validation imports:
import { createProductValidation, ValidationResult } from "../middleware/express-validator.js";
import upload from "../middleware/upload.js";



//Routes:
productRouter.post('/createProduct',createProductValidation,ValidationResult,
 upload.single('productImage'),createProduct);
productRouter.get('/readProducts',readProducts);
productRouter.delete('/deleteProduct/:id',deleteProduct);

productRouter.patch('/updateProduct/:id',updateProduct);//add the upload middleware to this route.?


export default productRouter;