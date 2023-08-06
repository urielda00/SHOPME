import express from "express";
const productRouter = express.Router();

//Controllers:
import {createProduct,
         readProducts,
        updateProduct,
        deleteProduct,
        searchProduct,
        readSingleProduct,
        readRelatedItemsByCategory,
        checkIfExist
       }
 from '../controllers/products.js';


//Middlewares:
// import { createProductValidation, ValidationResult } from "../middleware/express-validator.js";
// import upload from "../middleware/upload.js";
import { checkJWT } from "../middleware/jwt.js";

//Routes:,,checkJWTcheckJWT
productRouter.post('/createProduct',createProduct);
productRouter.get('/readSingleProduct/:productId',readSingleProduct);
productRouter.get('/readRelateProducts',readRelatedItemsByCategory);
productRouter.get('/readProducts',readProducts);
productRouter.post('/deleteProduct',deleteProduct);
productRouter.patch('/updateProduct/:id',updateProduct);//todo: upload middleware to this route!
productRouter.get('/searchProduct',searchProduct);
productRouter.get('/checkIfExist/:data',checkIfExist);



export default productRouter;


//add later the express validator- after handle the multiform/data error (that express-valid dont have access to the req.body) 
//need to add the jwt later to the creare route!1
// Delete the upload?