import express from 'express';
const resetPassRouter = express.Router();

//Controllers:
import * as controllers from '../controllers/resetPass.js';


resetPassRouter.post('/', controllers.sendLink);
resetPassRouter.get('/reset/:id/:token', controllers.verifyUrl);
resetPassRouter.post('/reset/:id/:token', controllers.resetPass);

export default resetPassRouter;
