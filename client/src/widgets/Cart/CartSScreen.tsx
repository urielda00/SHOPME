import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem } from '../../features/cartSlice';
import { useDispatch } from 'react-redux';
import { Box, Button, IconButton} from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
// const userName= window.sessionStorage.getItem('userNameHere');

const CartSScreen = () => {
   const {cart, totalQuantity,totalPrice, warningMessage}= useSelector((state:any)=>state.allCart)
   const dispatch= useDispatch();
  return (
       <Box sx={containerStyle}>
         <Box sx={{width:'100%'}}>
           <Box sx={{textAlign:'center'}}>
             <h1 style={{color:'black',fontFamily:'"Tilt Prism", cursive'}}>SHOPPING CART</h1>
             <div style={{border:'1px solid black'}}></div>
           </Box>
           {/* case of warning message */}
           {
            warningMessage && 
            <div style={warningMessageStyle}>
             {warningMessage}
            </div>
           }
           <Box sx={{display:'flex', marginTop:'10px',justifyContent:'space-between'}}>
             <div><p style={{color:'grey'}}>Total Items: {totalQuantity}</p></div>
             <div><p style={{color:'grey'}}>Total Price: {totalPrice} $</p></div>
           </Box>
          {/* case the cart is empty: */}
          {
           cart.length === 0 ?
           <div style={{marginBottom:'-10px'}}>
             <div style={{marginTop:'35px',fontSize:'20px',color:'grey',marginBottom:'-100px'}}>
               The cart is empty
             </div>
             <Link to='/productsList' style={{color:'black'}}>
               <IconButton style={{marginTop:'100px',color:'black',marginBottom:'-155px'}} size='small'>
                  <KeyboardReturnIcon/>
                    Back to shop
                </IconButton>
             </Link>
           </div>:
           <Link to='/productsList' style={{color:'black'}}>
             <IconButton style={{marginTop:'15px',color:'black'}} size='small'>
                 <KeyboardReturnIcon/>
                   Back to shop
                 </IconButton>
           </Link>
          }
         <ul style={{display:'flex',flexDirection:'column',marginTop:'5px',
           overflow:'scroll',height:'50vh',borderRadius:'10px'}}>
           {
             cart?.map((product:any)=>{
               return (
                 <li key={product._id} style={liStyle}>
                    <div style={{display:'flex',alignItems:'start',width:'100%',marginBottom:'12px', marginTop:'10px'}}>
                         <img  
                           style={{objectFit: 'cover',borderRadius:'15px',marginBottom:'12px', marginTop:'10px'}}
                           src={`http://localhost:5000/product/readProducts/${product.image}`}
                           width='100px' height='100px'
                            alt=''/>
                            <div>
                              <p style={{marginLeft:'10px',fontSize:'20px',marginTop:'18px'}}>{product.productName}</p>
                              <p style={{color:'grey', textAlign:'left',marginLeft:'11px',marginTop:'5px'}}>{product.price} $
                              </p>
                              <div style={{marginLeft:'-10px',marginTop:'15px'}}>
                                 <Button onClick={()=>{dispatch(decrementQuantity(product))}}>
                                   <RemoveIcon fontSize='small'/>
                                 </Button>
                                 <span>{product.itemQuantity}</span>
                                 <Button onClick={()=>{dispatch(incrementQuantity(product))}}>
                                   <AddIcon fontSize='small'/>
                                 </Button>
                              </div>
                            </div>
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
         <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
           <input type='text' style={{width:'80%',height:'35px',marginTop:'20px',color:'#fff',backgroundColor:'#332D2D',border:'none',borderRadius:'5px',textIndent:'10px'}} placeholder='Enter Your Coupon'/>
           <Button style={{textAlign:'center',width:'80%',
             height:'35px',marginTop:'10px'}} sx={{color:'#fff',bgcolor:'#332D2D', ":hover": {
              color:'black',
              bgcolor: "#AF5",
             }}}>
               Checkout
            </Button>
            <Button style={{textAlign:'center',width:'80%', height:'35px',marginTop:'10px'}} 
             sx={{ color:'#fff',bgcolor:'#332D2D',":hover": {
              color:'black',
              bgcolor: "#AF5"
             }}}>        
               Register
            </Button>
          </Box>
        </Box>  
)}
export default CartSScreen;    

const containerStyle:React.CSSProperties={
  height:'88vh',
  width:'90%',
  backgroundColor:'#fff',
  borderRadius:'20px',
  padding:'20px',
  marginTop:'30px',
  display:'flex',
  flexDirection:'column',
  overflow:'hidden',
  minWidth:'380px'
};

const warningMessageStyle:React.CSSProperties={
  zIndex:2000,
  position:'absolute',
  backgroundColor:'red',         
  top:'220px',
  right:'55px',
  opacity:'0.8',
  color:'black',
  borderRadius:'5px',
  width:'300px',
  textAlign:'center',
  height:'30px'
};

const liStyle:React.CSSProperties={
  listStyle:'none',
  display:'flex',
  justifyContent:'space-between',
  alignItems:'center',
  width:'100%',
  marginTop:'4px',
  height:'120px',
  boxShadow:'0 1px 2px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) '
};