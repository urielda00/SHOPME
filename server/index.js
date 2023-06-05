import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';


// //Routes imports:
import userAuthRouter from './routes/userAuth.js';
import productRouter from './routes/products.js';
import orderRouter from './routes/order.js';

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
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" })); //for XXS protection.
app.use(bodyParser.urlencoded({extended:true }))
app.use('/product/readProducts',express.static('uploads'));
app.use('/searchProduct',express.static('uploads'));
app.use(cookieParser());



//Routes:
app.use('/auth', userAuthRouter);
app.use('/product', productRouter);
app.use('/order', orderRouter);




//search try here:
import {users} from './users.js';
import Product from './models/Products.js';

app.get("/", async(req, res) => {
  const { q } = req.query;
  const keys = ["first_name", "last_name", "email"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(q))
    );
  };

  q ? res.json(search(users).slice(0, 10)) : res.json(users.slice(0, 10));
});







//search test:
app.get('/searchProduct',async(req,res)=>{
  try {
    const { key } = req.query


    // const search = (data) => {
    //   return data.filter((item) =>
    //     keys.some((key) => item[key].toLowerCase().includes(q))
    //   );
    // };


		 const pipeline= [{
      "$search":{
      "index":"some1",
      "text":{
        "query":key,
        "path":{
          'wildcard':'*'
        },
        "fuzzy":{}
       }
      }
    }] 
    // const pipeline=[
    //   {
    //     '$search': {
    //       'index': 'autoComplete_sesrch', 
    //       'autocomplete': {
    //         'query': key, 
    //         'path':'category'
    //       }
    //     }
    //   }
    // ]
		const response = await Product.aggregate(pipeline);
    return res.json(response)

  } catch (error) {
    console.log(error)
  return res.json([])
  }
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