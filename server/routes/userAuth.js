import express from 'express';
const userAuthRouter = express.Router();

//Controllers:
import * as controllers from '../controllers/userAuth.js';

//Middlewares:
import * as validation from '../middleware/express-validator.js';

//Routes:
userAuthRouter.get('/checkIfExist/:data', controllers.checkIfExist);

userAuthRouter.patch('/updateUserInfo/:id', controllers.updateUserInfo);

userAuthRouter.post('/register', validation.registerValidation, validation.ValidationResult, controllers.register);

userAuthRouter.post('/login', validation.loginValidation, validation.ValidationResult, controllers.login);

userAuthRouter.patch('/updateUserPass/:id', validation.updateUserPassValidation, validation.ValidationResult, controllers.updateUserPass);

userAuthRouter.delete('/deleteUser/:id', validation.deleteUserValidation, validation.ValidationResult, controllers.deleteUser);

export default userAuthRouter;
