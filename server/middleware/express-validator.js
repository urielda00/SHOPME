import {body,check, validationResult} from 'express-validator';

export const ValidationResult= (req,res,next)=>{
  const result= validationResult(req);
  if(!result.isEmpty()){//if there is some error. so:
    const resultarr=[];
    const error =result.array();
    for(let i=0;i<error.length;i++){
      resultarr.push(error[i].msg);
    }
    return res.status(422).json({success:false, error:resultarr})
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


export const deleteUserValidation=[
  check('password').trim().notEmpty().withMessage('Please enter your existing password')
];