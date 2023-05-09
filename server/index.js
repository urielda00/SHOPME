import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'; //check if I actually need that 
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';



//Models imports:
import User from './models/User.js';
import Order from './models/Order.js';
import Product from './models/Products.js';
import Invoice from './models/Invoice.js';
import Address from './models/Address.js';

// //Routes imports:
import authRouter from './routes/auth.js';
import productRouter from './routes/products.js';

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
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" })); //for XXS protection.
app.use(bodyParser.urlencoded({extended:true }))



//Routes:
app.use('/auth', authRouter);
app.use('/product', productRouter);





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