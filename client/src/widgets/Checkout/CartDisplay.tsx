import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeItem} from '../../features/cartSlice';
import ErrorMessages from '../Cart/ErrorMessages';
import { Box, Button, IconButton, ListItemText ,TextField,Grid} from '@mui/material';

// Icons import:
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';



 const CartDisplay = () => {
  const {cart, totalQuantity,totalPrice, warningMessage, userId}= useSelector((state:any)=>state.allCart)
  const dispatch= useDispatch();
  return (
    <Box className='ScrollCartStyle' sx={{overflow:'hidden'}}>
        <Box sx={childContainer1}>
          
           <Grid container spacing={2}>
             <Grid item xs={12} sm={12}>
               <ul >
             <div style={{width:'100%',height:'400px'}}>
          {
            cart?.map((product:any)=>{
              return (
                <li key={product._id} style={liStyle} >
                   <div style={{display:'flex', alignItems:'center',justifyContent:'space-around',marginTop:'15px',width:'100%'}}>
                    <div style={{display:'flex',alignItems:'center',width:'40%'}}>
                      <div>
                         <img  
                          style={{objectFit: 'cover',borderRadius:'15px'}}
                          src={`http://localhost:5000/product/readProducts/${product.image}`}
                          width='90px' height='90px' alt=''/>
                       </div>
                       <div>
                         <ListItemText style={{marginLeft:'30px'}} primary={product.productName} />
                       </div>
                   </div>
                   <div style={{display:'flex', alignItems:'center',width:'60%',justifyContent:'space-around'}}>
                       <div>
                         <Button onClick={()=>{dispatch(decrementQuantity(product))}}>
                           <RemoveIcon/>
                         </Button>
                         <span>{product.itemQuantity}</span>
                         <Button onClick={()=>{dispatch(incrementQuantity(product))}}>
                           <AddIcon/>
                         </Button> 
                       </div>
                       <div style={{marginLeft:'-10px'}}>
                          {product.price}$
                       </div>
                  </div>
                 </div>
                </li>
              )})
          }             
            </div>
           </ul> 
             </Grid>
           </Grid>
        </Box>
        {/* for Mobile Screens: */}
        <Box sx={{display:{xs:'flex',sm:'none', md: 'none'}}}>
          aaa
        </Box>
        {
            warningMessage && <ErrorMessages/>
        }
        </Box>
  )
}
export default CartDisplay;

const childContainer1={
  justifyContent:'space-between',
  width:'100%',
  height:'380px',
  overflowY:'scroll',
  overflowX:'hidden',
  display:{xs:'none',sm:'flex', md: 'flex'}
};

const liStyle:React.CSSProperties={
  listStyle:'none',
  display:'flex',
  justifyContent:'space-between'
};
