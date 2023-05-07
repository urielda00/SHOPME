import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'; //check if I actually need that 
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';

//Models imports:
import User from './models/User';
import Order from './models/Order';
import Product from './models/Products';
import Invoice from './models/Invoice';
import Address from './models/Address';

// //Routes imports:
// import authRoute from './routes/auth.js';??


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


//Routes:
//app.use('/auth', authRoute);
app.get('/', (req,res)=>{
  res.send('hello')
})


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