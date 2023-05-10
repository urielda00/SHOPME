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
app.use('/uploads',express.static('uploads'))//anything on this path is connecting to this folder- multer


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



//multer test here: (before mcv)


// //for sub-photos:
// app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
//   // req.files is array of `photos` files
//   // req.body will contain the text fields, if there were any
// })





/*

//multer test here: (before mcv)
import multer from 'multer';
import path from 'path';

const upload = multer({
   dest: 'uploads/',
   fileFilter: (req, file, cb)=> {
    const extension = path.extname(file.originalname).toLowerCase();
    const mimetyp = file.mimetype;
    if (
        extension == '.jpg' ||
        extension == '.jpeg' ||
        extension == '.png' ||
        extension== '.pdf'||
        mimetyp == 'image/png' ||
        mimetyp == 'image/jpg' ||
        mimetyp == 'image/jpeg'
        
    ) {
        cb(null, true);
    }else{
     console.log('file must be photo or pdf!')
    }
  },
  limits:{
    fileSize: 1024*1024 *2  //2MB
  }
});

app.use('/uploads',express.static('uploads'))//anything on this path is connecting to this folder
app.post('/profile', upload.single('avatar'), async (req, res)=> {
  try {
  const imagePath= req.file.filename;
  const saveProduct= new Product({
    imageUrl: imagePath
  })
  await saveProduct.save();

  } catch (error) {
    console.log(error);
  }

  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})

// //for sub-photos:
// app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
//   // req.files is array of `photos` files
//   // req.body will contain the text fields, if there were any
// })

*/