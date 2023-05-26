//this validation is only for forced submitting- in the frontend we also have the react 
//form hook for form validation. lastly- after the input passed all the validations- he still
//need to match the DB validation- user& email exists+ price check and quantity- on the product.

import {check, validationResult} from 'express-validator';

export const ValidationResult= (req,res,next)=>{
  const result= validationResult(req);
  if(!result.isEmpty()){//if there is some error. so:
    const resultarr=[];
    const error =result.array();
    for(let i=0;i<error.length;i++){
      resultarr.push(error[i].msg);
    }
    return res.status(422).json({success:false, error:resultarr}).send(); 
  }
  next();
};



 export const registerValidation= [
  check('firstName').trim().notEmpty().withMessage('Please enter first name').isLength({min:2, max:15}).withMessage('Please enter the name between 2 to 15 characters'),
  
  check('lastName').trim().notEmpty().withMessage('Please enter last name').isLength({min:2, max:15}).withMessage('Please enter the last name between 2 to 15 characters'),

  check('email').trim().notEmpty().withMessage('Please enter mail').isEmail().withMessage('Email is not valid.'),

  check('userName').trim().notEmpty().withMessage('Please enter user name').isLength({min:2, max:15}).withMessage('Please enter the user name between 2 to 15 characters'),
  
   check('verifyPass').trim().notEmpty().withMessage('Please repeat password').isLength({min:5}).withMessage('Password must be more than 5 letters.'),

  check('password').trim().notEmpty().withMessage('Please enter password').isLength({min:5}).withMessage('Password must be more than 5 letters.'),

  check('phoneNumber').isMobilePhone().withMessage('Phone number not valid').notEmpty().withMessage('Please enter the phone number')
];



export const loginValidation=[
check('userName').trim().notEmpty().withMessage('Please enter user name'),
check('password').trim().notEmpty().withMessage('Please enter password')
];


export const updateUserPassValidation= [
check('insertPrePassword').trim().notEmpty().withMessage('Please enter your existing password'),  

check('password').trim().notEmpty().withMessage('Please enter the new password').isLength({min:5}).withMessage('Password must be more than 5 letters.'),

check('verifyPass').trim().notEmpty().withMessage('Please repeat the new password').isLength({min:5}).withMessage('Password must be more than 5 letters.')
];


export const deleteUserValidation = [
  check('password').trim().notEmpty().withMessage('Please enter your existing password')
];


export const createProductValidation = [
  check('shortDescription').trim().notEmpty().withMessage('please enter short description').
  isLength({min:4, max:50}).withMessage('Please enter short description between 4 to 50 characters'),

  check('longDescription').trim().notEmpty().withMessage('please enter long description').
  isLength({min:4, max:150}).withMessage('Please enter long description between 4 to 150 characters'),

  check('price').trim().isNumeric().withMessage('must be a number').notEmpty().withMessage('please enter price').isLength({min:1, max:5}).withMessage('Please enter price between 1 to 5 characters'),

  check('category').trim().notEmpty().withMessage('Please enter category'),

  check('quantity').trim().isNumeric().withMessage('must be a number').notEmpty().withMessage('please enter quantity'),
  
  check('productName').trim().notEmpty().withMessage('Please enter the product name').isLength({min:2, max:20}).withMessage('Please enter namebetween 2 to 20 characters'),
  // Multer middleware take care of the image validation- size, ext, mimetype, and more.
];

export const createOrderValidation= [
  check('address').trim().notEmpty().withMessage('Please enter your address'),
  
  check('productsId').notEmpty().withMessage('The shopping cart is empty')
];