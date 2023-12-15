import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import fileupload from 'express-fileupload';

// //Routers imports:
import cartRouter from './routes/cart.js';
import orderRouter from './routes/order.js';
import productRouter from './routes/products.js';
import userAuthRouter from './routes/userAuth.js';
import resetPassRouter from './routes/resetPass.js';

//Configuration:
const port = process.env.PORT || 5000;
const app = express();
dotenv.config();
const corsOptions = {
	credentials: true,
	origin: ['http://localhost:3000', 'https://shopme-new.onrender.com'],
};

//Middlewares:
app.use(helmet());
app.disable('etag');
app.use(fileupload());
app.use(express.json());
app.use(cookieParser());
app.use(morgan('common'));
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/searchProduct', express.static('uploads'));
app.use('/product/readProducts', express.static('uploads'));
app.use(express.urlencoded({ limit: '30mb', extended: false }));
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' })); //for XXS protection.

//Routers:
app.use('/cart', cartRouter);
app.use('/order', orderRouter);
app.use('/auth', userAuthRouter);
app.use('/product', productRouter);
app.use('/resetPass', resetPassRouter);

//Connect to the DB and then listen at the port:
mongoose
	.connect(process.env.DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('connected to db!');
		app.listen(port, () => console.log(`App is listening at port: ${port}!`));
	})
	.catch((error) => console.log(error.message));
