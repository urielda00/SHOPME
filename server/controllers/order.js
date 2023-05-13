import Order from "../models/Order.js";
import moment from 'moment/moment.js';
const currentDate = moment();


//The schema's that involve while creating an order:
import Address from "../models/Address.js";
import Invoice from "../models/Invoice.js";
import Product from "../models/Products.js";
import User from "../models/User.js";

 

//later, need to add: 1) totalprice backend calc. 
//2) check if the quantity is not too much for what we have in the stock!
//both need a loop.


//Create
export const createOrder = async(req,res)=>{
  try {

  const id = req.params.id;
  const {address, productsId, totalPrice} = req.body; //productsId should be an array of objects!!
  const dateis = currentDate.format('MM-DD-YYYY hh:mm A');
  const date = new Date(dateis)
  //Create new order:
  const saveOrder= new Order({
    address,
    date,
    userId: id,
    productsId,
    totalPrice
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
        totalPrice
      })
  }else{
    const createNewInvoice= new Invoice({
      orders: [orderId],
      date,
      userId:id,
      totalPrice
    });
    
    await createNewInvoice.save();
    
  }

  //Update products: 
  for (const productId of productsId) {
    let product = await Product.findById(productId.id);
    let quantity =  Number(productId.quantity) ;
    let result= product.quantity-quantity;
    const updatedProduct= await Product.findByIdAndUpdate(productId.id,{quantity:result})
  }   
  res.status(200)
  .send("Your order has been successfully placed and the new address created and also invoice and products!");
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



//Update -this is might not be necessasry..]mj




//Delete (menager only)- check if this route necessary!