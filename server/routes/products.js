import express from "express";
const productRouter = express.Router();




//Controllers:
import {createProduct,
         readProducts,
        updateProduct,
        deleteProduct}
 from '../controllers/products.js';


//Middlewares:
import { createProductValidation, ValidationResult } from "../middleware/express-validator.js";
import upload from "../middleware/upload.js";
import { checkJWT } from "../middleware/jwt.js";


//Routes:
productRouter.post('/createProduct',checkJWT,
upload.array('productImages',4),createProduct); //add later the express validator- after handle the multiform/data error (that express-valid dont have access to the req.body)

productRouter.get('/readProducts',readProducts);
productRouter.delete('/deleteProduct/:id',checkJWT,deleteProduct);

productRouter.patch('/updateProduct/:id',checkJWT,updateProduct);//todo: upload middleware to this route!



export default productRouter;