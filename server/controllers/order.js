import Order from "../models/Order.js";
import moment from 'moment/moment.js';
const currentDate = moment();


//The schema's that involve while creating an order:
import Address from "../models/Address.js";
import Invoice from "../models/Invoice.js";
import Product from "../models/Products.js";
import User from "../models/User.js";




//Create
export const createOrder = async(req,res)=>{
  try {
  const id = req.params.id;
  const {address, productsId} = req.body; //productsId should be an array of objects!!
  const dateis = currentDate.format('MMMM Do YYYY, h:mm:ss a');
  // const date = new Date(dateis);
  const date= dateis;
  let totalPriceT=0;
  


  for await (const productId of productsId) {

    const product = await Product.findById(productId.id); 
    const reqQuantity =  Number(productId.quantity);
    let calc = product.quantity-reqQuantity;
    let priceTest = product.price;
    let totalPriceIs = priceTest * reqQuantity;
    totalPriceT=totalPriceT+totalPriceIs;
    if(calc < 0){
     return res.status(400).json({message:'Out of stock!'}); 
    }else{
    let result= calc; 
    await Product.findByIdAndUpdate(productId.id,{quantity:result})
    }
  };//the end of the for loop

  //Create new order:
  const saveOrder= new Order({
    address,
    date,
    userId: id,
    productsId,
    totalPrice:totalPriceT
  });
  await saveOrder.save();
  
  //Update Address-
  const searchAddressByUserId= await Address.findOne({userId:id}); 
  const findAddress= await Address.findOne({userId:id, addresses:{$in:[address]}});
  if(searchAddressByUserId && !findAddress){ //if there is user and no matched  address:

    const updateAddress = await Address.findOneAndUpdate({userId:id},
      {$push:{
        addresses: address
      }, userId: id
    });

  }else if(!searchAddressByUserId){
    const createNewAddress= new Address({
      userId: id,
      addresses: [address]
    });
    await createNewAddress.save();
  }  

  //Update Invoices:
  const searchInvoiceByUserId= await Invoice.findOne({userId:id}); 
  const order= await Order.findOne({date, userId:id});
  const orderId= order.id;
  if(searchInvoiceByUserId){
    let someObj= {date, orderId};
       await Invoice.findOneAndUpdate({userId:id},
      {
        $push:{
          orders:someObj
        },
        date,
        userId:id,
        totalPrice:totalPriceT
      })
  }else{
    let someObj1= { date, orderId};
    const createNewInvoice= new Invoice({
      orders: [someObj1],
      date,
      userId:id,
      totalPrice:totalPriceT
    });
    
    await createNewInvoice.save();
  }
  //how to make sum function?
  //Update User
  const invoiceId= await Invoice.findOne({userId:id, date});
  const invoiceUserId= invoiceId.userId;
  await User.findByIdAndUpdate(id, {
    $push:{
      invoices:invoiceUserId
    }
  });
   
  res.status(200)
  .json({message:"Your order has been successfully placed"}); //add later end()? d

  } catch (error) {
    res.status(500).json(error.message);
  }
};





//Read Orders Relative To A Specific User.
export const readOrders = async(req,res)=>{
  try {
  const id= req.params.id;
  const orders= await Order.find({userId:id});
  res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error.message);
  } 
};
