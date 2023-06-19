import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem, deleteAllCart } from '../../features/cartSlice';
import { useDispatch } from 'react-redux';
import { Box, Button, IconButton, ListItemText ,TextField} from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
// const userName= window.sessionStorage.getItem('userNameHere');
// const userName='user100';


const CartSScreen = () => {
  const {cart, totalQuantity,totalPrice, warningMessage}= useSelector((state:any)=>state.allCart)
  const dispatch= useDispatch();
  return (
       <Box sx={{height:'90vh',width:'90%', backgroundColor:'#fff', borderRadius:'20px',padding:'20px'}}>
         <Box sx={{textAlign:'center'}}>
           <h1 style={{color:'black',fontFamily:'"Tilt Prism", cursive'}}>SHOPPING CART</h1>
         </Box>
         
  


{/*      
        <Box  sx={{display:'flex', justifyContent:'space-between',width:'70%',overflowY:'scroll',overflowX:'hidden'}}>
          <div>
            <div id='ScrollCartStyle'>
              <h1 style={{color:'black',fontFamily:'"Tilt Prism", cursive'}}>SHOPPING CART</h1>
              {
                cart.length === 0 ? <div style={{marginBottom:'-20px'}}></div>:
                <p >
                <Button onClick={()=>{dispatch(deleteAllCart())}}
                  style={{color:'grey'}}size='small'>
                  Delete all
                  <DeleteOutlineOutlinedIcon style={{color:'#4E3636',marginTop:'-5px'}}/>
                </Button>
              </p>
              }
              
            </div>
          {
           cart.length === 0 ?
           <div>
             <div style={{marginTop:'40px',fontSize:'20px',color:'grey'}}>
               The cart is empty
             </div>
             <Link to='/productsList' style={{color:'black'}}>
               <IconButton style={{marginTop:'25px',color:'black'}} size='small'>
                  <KeyboardReturnIcon/>
                  Back to shop
                </IconButton>
             </Link>
           </div>:
           <Link to='/productsList' style={{color:'black'}}>
               <IconButton style={{marginTop:'25px',color:'black'}} size='small'>
                  <KeyboardReturnIcon/>
                  Back to shop
                </IconButton>
             </Link>
          }
          
          <ul>
           <div style={{width:'130%',marginTop:'10px'}}>
          {
            cart?.map((product:any)=>{
              return (
                <li key={product._id} style={{listStyle:'none', display:'flex', justifyContent:'space-between'}} >
                  <div style={{display:'flex', alignItems:'center',
                    justifyContent:'space-around',marginTop:'15px',width:'90%'}}>
                    <div style={{display:'flex',alignItems:'center',width:'220px',marginRight:'-20px'}}>
                         <img  
                          style={{objectFit: 'cover',borderRadius:'15px'}}
                          src={`http://localhost:5000/product/readProducts/${product.image}`}
                          width='45px' height='45px'
                           alt=''/>
                       <div >
                       <p style={{marginLeft:'5px',fontSize:'15px'}}>{product.productName} </p>
                       </div>
                   </div>
                   
                    <div style={{display:'flex', alignItems:'center',width:'100%'}}>
                    <div style={{marginLeft:'10px',marginRight:'10px'}}>
                      <Button onClick={()=>{dispatch(decrementQuantity(product))}}>
                        <RemoveIcon fontSize='small'/>
                      </Button>
                      <span>{product.itemQuantity}</span>
                      <Button onClick={()=>{dispatch(incrementQuantity(product))}}>
                        <AddIcon fontSize='small'/>
                      </Button>
                   </div>
                   <div style={{width:'50px'}}>
                     {product.price}$
                   </div>
                   <div  
                    onClick={()=>{ dispatch(removeItem(product))}}>
                      <Button style={{color:'black'}}>
                        <CloseIcon fontSize='small'/>
                      </Button>
                   </div>
                  </div>

                  </div>
                </li>
              )})
          }             
           </div>
          </ul>
         </div>
        
        </Box>

        <Box sx={{textAlign:'center',width:'25%'}}>
        {
          warningMessage && 
          <div style={{zIndex:2000, position:'absolute', backgroundColor:'red',
              top:'190px',right:'190px', opacity:'0.8', color:'black', borderRadius:'5px',
              width:'300px', textAlign:'center', height:'30px'}}>
            {warningMessage}
          </div>
       }
       <div>
          <h1 style={{marginTop:'15px',color:'black',marginLeft:'-10px',
           fontFamily:'"Tilt Prism", cursive'}}>
            Summary
          </h1>
          <p style={{color:'grey'}}>Total Items: {totalQuantity}</p>
      </div>  
          <div style={{marginTop:'110px'}}>
            <div style={{textAlign:'left'}}>
              <h6 style={{marginLeft:'5px'}}>
                COUPON CODE:
              </h6>
            </div>
          
          <TextField size='small' sx={{"::placeholder":{fontSize:'5px'}}}
          aria-placeholder='aaa'
           InputLabelProps={{ style: { color: 'black' ,opacity:'0.8'}}}
           style={{width:'96%',marginTop:'5px', backgroundColor:'#EDC6B1',color:'black'}}
           label="Enter Code" variant="filled">
          </TextField>
           <div style={{marginTop:'70px',display:'flex',alignItems:'end',justifyContent:'space-between'}}>
            <h5>TOTAL PRICE</h5>
            <h4 >
              {totalPrice} $
            </h4>
          </div>
          <div> */}
          {/* {
           window.sessionStorage.getItem('isLoggedIn')==='true'? */}
           {/* <Button style={{textAlign:'center',width:'96%',
             height:'35px',marginTop:'10px'}} sx={{color:'#fff',bgcolor:'#332D2D', ":hover": {
              color:'black',
              bgcolor: "#AF5",
            }}}>Checkout</Button>
           <Button style={{textAlign:'center',width:'96%', height:'35px',marginTop:'10px'}} 
             sx={{ color:'#fff',bgcolor:'#332D2D',":hover": {
              color:'black',
              bgcolor: "#AF5"
            }}}>        
             Register
           </Button>
          </div>
          </div>
        </Box> */}
       </Box>  )
}

export default CartSScreen;