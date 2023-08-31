import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity} from '../../features/cartSlice';
import ErrorMessages from '../Cart/ErrorMessages';
import { Box, Button, ListItemText} from '@mui/material';

// Icons import:
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CartDisplayMobile from './CartDisplayMobile';



 const CartDisplay = () => {
  const {cart, warningMessage} = useSelector((state:any)=>state.allCart)
  const dispatch= useDispatch();
  return (
    <Box className='ScrollCartStyle' sx={{overflow:'hidden'}}>
        <Box sx={childContainer1}>
               <ul  style={{width:'100%'}}>
             <div style={{width:'100%'}}>
          {
            cart?.map((product:any)=>{
              return (
                <li key={product._id} style={liStyle} >
                   <div style={{display:'flex', alignItems:'center',justifyContent:'space-around',marginTop:'15px',width:'100%'}}>
                    <div style={{display:'flex',alignItems:'center',width:'40%'}}>
                      <div>
                         <img  
                          style={{objectFit: 'cover',borderRadius:'15px'}}
                          src={`https://deployment-shopme.onrender.com/product/readProducts/${product.image}`}
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

        </Box>
        {/* for Mobile Screens: */}
        <Box sx={{display:{xs:'flex',sm:'none', md: 'none'},width:'100%',height:'450px'}}>
          <CartDisplayMobile/>
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
