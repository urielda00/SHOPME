import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem, deleteAllCart } from '../../features/cartSlice';
import { useDispatch } from 'react-redux';
import { Box, Button, IconButton,TextField} from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ErrorMessages from './ErrorMessages';
import DialogIs from './DialogIs';
import { useState } from 'react';
// const userName= window.sessionStorage.getItem('userNameHere');

// Style import:
import { containerStyle,listStyle,textFieldStyle } from '../../styles/CartPage/CartMScreen';

const CartMScreen = () => {
    const {cart, totalQuantity,totalPrice, warningMessage}= useSelector((state:any)=>state.allCart);
    const {user}= useSelector((state:any)=>state.user);
    const dispatch= useDispatch();
    const [ dialogOpen ,setDialogOpen] = useState(false);

     return (
       <Box sx={containerStyle} >
        <Box sx={{display:'flex',alignItems:'end', justifyContent:'space-between'}}>
           {/* error messages:*/}
           {
            warningMessage && <ErrorMessages/>
          }
          <div>
           <h1 style={{color:'black',fontFamily:'"Tilt Prism", cursive'}}>SHOPPING CART</h1>
          {/* checking if the cart is empty */}
          {
           cart.length === 0 ?
           <div>
             <div style={{marginTop:'20px',fontSize:'20px',color:'grey',marginLeft:'10px'}}>
               The cart is empty
             </div>
             <Link to='/productsList' style={{color:'black'}}>
               <IconButton style={{marginTop:'10px',color:'black'}} size='small'>
                   <KeyboardReturnIcon/>
                     Back to shop
                   </IconButton>
             </Link>
             </div>:
             <Link to='/productsList' style={{color:'black'}}>
               <IconButton style={{marginTop:'10px',color:'black'}} size='small'>
                 <KeyboardReturnIcon/>
                   Back to shop
                </IconButton>
             </Link>
          }
          </div>
          {
            cart.length === 0 ? <div style={{display:'none'}}></div>:
              <p >
               <Button onClick={()=>{dispatch(deleteAllCart())}}
                 style={{color:'grey'}}size='small'>
                   Delete all
                 <DeleteOutlineOutlinedIcon style={{color:'#4E3636',marginTop:'-5px'}}/>
                </Button>
              </p>
              }
        </Box>
        {/* map the products added to the cart */}
        <Box  sx={{width:'100%',overflowX:'scroll',borderRadius:'10px'}}>
           <ul style={{display:'flex',flexDirection:'column',marginTop:'5px'}}>
          {
            cart?.map((product:any)=>{
              return (
                <li key={product._id} style={listStyle} >
                  <div style={{display:'flex',alignItems:'center',width:'150px'}}>
                         <img  
                          style={{objectFit: 'cover',borderRadius:'15px'}}
                          src={`https://deployment-shopme.onrender.com/product/readProducts/${product.image}`}
                          width='55px' height='55px'
                           alt=''/>
                       <div >
                       <p style={{marginLeft:'10px',fontSize:'15px'}}>{product.productName} </p>
                       </div>
                   </div>
                   <div style={{display:'flex', alignItems:'center'}}>
                     <div style={{marginLeft:'5px',marginRight:'-40px'}}>
                       <Button onClick={()=>{dispatch(decrementQuantity(product))}}>
                         <RemoveIcon fontSize='small'/>
                     </Button>
                     <span>{product.itemQuantity}</span>
                     <Button onClick={()=>{dispatch(incrementQuantity(product))}}>
                       <AddIcon fontSize='small'/>
                      </Button>
                   </div>
                   </div>
                   <div style={{width:'50px', textAlign:'right'}}>
                     {product.price} $
                   </div>
                   <div onClick={()=>{ dispatch(removeItem(product))}}>
                       <Button style={{color:'black'}}>
                         <CloseIcon fontSize='small'/>
                       </Button>
                   </div>
                </li>
              )})
           }             
           </ul> 
         </Box>
           {/* the summery part */}
           <Box sx={{width:'100%',height:'20vh'}}>
             <div style={{width:'100%',display:'flex',alignItems:'end'}}>
               <h1 style={{marginTop:'15px',color:'black',fontFamily:'"Tilt Prism", cursive'}}>
                 Summary
               </h1>
               <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
                <p style={{color:'grey',marginLeft:'5px'}}>Total Items: {totalQuantity}</p>
                <p style={{color:'grey',marginLeft:'5px'}}>Total Price: {totalPrice} $</p>
               </div>
             </div>
             <div style={{display:'flex',justifyContent:'space-between'}}>
               <div style={{marginTop:'20px'}}>
                  <TextField size='small' sx={{"::placeholder":{fontSize:'5px'}}}
                    InputLabelProps={{ style: { color: 'black' ,opacity:'0.8'}}} style={textFieldStyle} 
                    label="Enter Coupon Code" variant="filled">
                  </TextField>
              </div>
              <div style={{marginTop:'5px'}}>
              <DialogIs open={dialogOpen}/>
              {
                 cart.length < 1 ?
                 <Button onClick={()=>{setDialogOpen(true)}} style={{textAlign:'center',width:'96%',
                   height:'35px',marginTop:'10px'}} sx={{color:'#fff',bgcolor:'#332D2D',
                   ":hover": {color:'black',bgcolor: "#AF5",}}}>
                   Checkout
                 </Button> :
                 <Link to='/checkout'>
                 <Button style={{textAlign:'center',width:'96%',
                   height:'35px',marginTop:'10px'}} sx={{color:'#fff',bgcolor:'#332D2D',
                   ":hover": {color:'black',bgcolor: "#AF5",}}}>
                   Checkout
                 </Button>
                </Link>
              }
              
               
                { 
                 !user && 
                  <Link to='/register'>
                 <Button style={{textAlign:'center',width:'96%', height:'35px',marginTop:'10px'}} 
                  sx={{ color:'#fff',bgcolor:'#332D2D',":hover": {color:'black',bgcolor: "#AF5"}}}>        
                   Register
                 </Button>
                 </Link>
                }
              </div>
        </div>
      </Box>
    </Box> 
)}
export default CartMScreen;