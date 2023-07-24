import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import fileupload from "express-fileupload";

// //Routers imports:
import userAuthRouter from './routes/userAuth.js';
import productRouter from './routes/products.js';
import orderRouter from './routes/order.js';
import resetPassRouter from './routes/resetPass.js';
import cartRouter from './routes/cart.js';


//need to handle the 304 status and make another file that recive and save all the logs in the DB
//need to add multer multi-image upload functionality.

//Configuration:
const port= process.env.PORT||5000;
const app= express();
dotenv.config();

//Middlewares:
app.use(express.json());
app.use(express.urlencoded({limit:'30mb',extended:false}));
app.use(cors());
app.use(morgan("common")); //the common loger of morgan
app.use(helmet());
app.use(fileupload());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" })); //for XXS protection.
app.use(bodyParser.urlencoded({extended:true }))
app.use('/product/readProducts',express.static('uploads'));
app.use('/searchProduct',express.static('uploads'));
app.use(cookieParser());
app.disable('etag');


//Routers:
app.use('/auth', userAuthRouter);
app.use('/product', productRouter);
app.use('/order', orderRouter);
app.use('/resetPass', resetPassRouter);
app.use('/cart',cartRouter);


//Connect to the DB and then listen at the port:
mongoose.connect(process.env.DB_URL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=>{
  console.log('connected to db!')
  app.listen(port, ()=> console.log(`App is listening at port: ${port}!`))
  
  })  
.catch((error)=>console.log(error.message));