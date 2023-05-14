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
  const dateis = currentDate.format('MM-DD-YYYY hh:mm A');
  const date = new Date(dateis);
  let totalPriceT=0;

  
  
  //Update products
  for await (const productId of productsId) {
    
    let product = await Product.findById(productId.id); 
    let reqQuantity =  Number(productId.quantity);
    let calc = product.quantity-reqQuantity;
    let priceTest = product.price;// המחיר שקיים בפועל במסד
    let totalPriceIs = priceTest * reqQuantity;
    totalPriceT=totalPriceT+totalPriceIs;
    if(calc >= 0){


    let result= calc; 
    await Product.findByIdAndUpdate(productId.id,{quantity:result})

  //Create new order:
  const saveOrder= new Order({
    address,
    date,
    userId: id,
    productsId,
    totalPrice:totalPriceT
  })
  await saveOrder.save();
  
  
  //Update Address-
  const searchAddressByUserId= await Address.findOne({userId:id}); 
  if(searchAddressByUserId){
    //if there is, update the address:
    const updateAddress = await Address.findOneAndUpdate({userId:id},
      {$push:{
        addresses: address
      }, userId: id
    });
  }else{
    const createNewAddress= new Address({
      userId: id,
      addresses: [address]
    })
    await createNewAddress.save();
  }  

  //Update Invoices:
  const searchInvoiceByUserId= await Invoice.findOne({userId:id}); 
  const order= await Order.findOne({date, userId:id});
  const orderId= order.id;
  if(searchInvoiceByUserId){
    const updateInvoice= await Invoice.findOneAndUpdate({userId:id},
      {
        $push:{
          orders:orderId
        },
        date,
        userId:id,
        totalPrice:totalPriceT
      })
  }else{
    const createNewInvoice= new Invoice({
      orders: [orderId],
      date,
      userId:id,
      totalPrice:totalPriceT
    });
    
    await createNewInvoice.save();
    
  }
  return res.status(200)
  .send("Your order has been successfully placed and the new address created and also invoice and products!");

    }else{
    return res.status(400).json('Out of stock!')
    }
  }   
  } catch (error) {
    res.status(500).json(error.message);
  }
};




/*
//Create
export const createOrder = async(req,res)=>{
  try {
  const id = req.params.id;
  const {address, productsId} = req.body; //productsId should be an array of objects!!
  const dateis = currentDate.format('MM-DD-YYYY hh:mm A');
  const date = new Date(dateis);
  let totalPriceT=0;
  


  for await (const productId of productsId) {
    
    let product = await Product.findById(productId.id); 
    let reqQuantity =  Number(productId.quantity);
    let calc = product.quantity-reqQuantity;
    let priceTest = product.price;//  המחיר שקיים בפועל במסד נתונים
    let totalPriceIs = priceTest * reqQuantity;
    totalPriceT=totalPriceT+totalPriceIs;
    if(calc < 0){
     res.status(400).json('Out of stock!'); //אם אין במלאי, זה מה שיוחזר
    }else{
    let result= calc; 
    await Product.findByIdAndUpdate(productId.id,{quantity:result})
    }
  }//the end of the for loop
  //Create new order:
  const saveOrder= new Order({
    address,
    date,
    userId: id,
    productsId,
    totalPrice:totalPriceT
  })
  await saveOrder.save();
  
  
  //Update Address-
  const searchAddressByUserId= await Address.findOne({userId:id}); 
  if(searchAddressByUserId){
    //if there is, update the address:
    const updateAddress = await Address.findOneAndUpdate({userId:id},
      {$push:{
        addresses: address
      }, userId: id
    });
  }else{
    const createNewAddress= new Address({
      userId: id,
      addresses: [address]
    })
    await createNewAddress.save();
  }  

  //Update Invoices:
  const searchInvoiceByUserId= await Invoice.findOne({userId:id}); 
  const order= await Order.findOne({date, userId:id});
  const orderId= order.id;
  if(searchInvoiceByUserId){
    const updateInvoice= await Invoice.findOneAndUpdate({userId:id},
      {
        $push:{
          orders:orderId
        },
        date,
        userId:id,
        totalPrice:totalPriceT
      })
  }else{
    const createNewInvoice= new Invoice({
      orders: [orderId],
      date,
      userId:id,
      totalPrice:totalPriceT
    });
    
    await createNewInvoice.save();
    
  }
  res.status(200)
  .send("Your order has been successfully placed and the new address created and also invoice and products!");




  } catch (error) {
    res.status(500).json(error.message);
  }
}

*/