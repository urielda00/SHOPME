import express from 'express';
const productRouter = express.Router();

//Controllers:
import * as controllers from '../controllers/products.js';

//Routes:,,checkJWTcheckJWT
productRouter.get('/readProducts', controllers.readProducts);
productRouter.get('/searchProduct', controllers.searchProduct);
productRouter.post('/deleteProduct', controllers.deleteProduct);
productRouter.post('/createProduct', controllers.createProduct);
productRouter.get('/checkIfExist/:data', controllers.checkIfExist);
productRouter.patch('/updateProduct/:id', controllers.updateProduct);
productRouter.get('/readRelateProducts', controllers.readRelatedItemsByCategory);
productRouter.get('/readSingleProduct/:productId', controllers.readSingleProduct);

export default productRouter;
