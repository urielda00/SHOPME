// Winston- logger, for future tracking and storing the logs in the db. 

import winston from 'winston';
const { transports, format, createLogger } = winston;
const { combine, printf } = format;


//Date for for the format:
import moment from 'moment/moment.js';
const currentDate = moment();
const dateis = currentDate.format('MMMM Do YYYY, h:mm:ss a');

const customLog = printf(({ level, message }) => {
return `Level:[${ level }] LogTime: [${ dateis }] Message:-[${ message }]`
});


//User logs:
const UserInfoLogger= createLogger({
  format: combine(customLog),
  transports:
   [ 
    new transports.File({
    filename: 'Info.log',
    dirname: 'logs/user',
    level: 'info',
  })  
 ]
});

 const UserErrorLogger= createLogger({
  format: combine(customLog),
  transports:[
    new transports.File({
      filename: 'errors.log',
      dirname: 'logs/user',
      level: 'error',
     })
  ]
 });


//Product logs:
const ProductInfoLogger= createLogger({
  format: combine(customLog),
  transports:
   [ 
    new transports.File({
    filename: 'Info.log',
    dirname: 'logs/products',
    level: 'info',
  })  
 ]
});



const ProductErrorLogger= createLogger({
  format: combine(customLog),
  transports:[
    new transports.File({
      filename: 'errors.log',
      dirname: 'logs/products',
      level: 'error',
     })
  ]
 });



//Order logs:
const OrderInfoLogger= createLogger({
  format: combine(customLog),
  transports:
   [ 
    new transports.File({
    filename: 'Info.log',
    dirname: 'logs/order',
    level: 'info',
  })  
 ]
});


const OrderErrorLogger= createLogger({
  format: combine(customLog),
  transports:[
    new transports.File({
      filename: 'errors.log',
      dirname: 'logs/order',
      level: 'error',
     })
  ]
 });




//ResetPass logs:
const ResetPassInfoLogger= createLogger({
  format: combine(customLog),
  transports:
   [ 
    new transports.File({
    filename: 'Info.log',
    dirname: 'logs/resetPass',
    level: 'info',
  })  
 ]
});


const ResetPassErrorLogger= createLogger({
  format: combine(customLog),
  transports:[
    new transports.File({
      filename: 'errors.log',
      dirname: 'logs/resetPass',
      level: 'error',
     })
  ]
 });

 
//Carts logs:
const CartInfoLogger= createLogger({
  format: combine(customLog),
  transports:
   [ 
    new transports.File({
    filename: 'Info.log',
    dirname: 'logs/Cart',
    level: 'info',
  })  
 ]
});


const CartErrorLogger= createLogger({
  format: combine(customLog),
  transports:[
    new transports.File({
      filename: 'errors.log',
      dirname: 'logs/Cart',
      level: 'error',
     })
  ]
 });



export {
   UserErrorLogger, UserInfoLogger,
   ProductErrorLogger, ProductInfoLogger,
   OrderInfoLogger, OrderErrorLogger,
   ResetPassErrorLogger, ResetPassInfoLogger,
   CartErrorLogger,CartInfoLogger
  };