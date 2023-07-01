import { Box} from '@mui/material';
import CartLScreen from '../widgets/Cart/CartLScreen';
import CartMScreen from '../widgets/Cart/CartMScreen';
import CartSScreen from '../widgets/Cart/CartSScreen';
const Cart = () => {
  return (
    <div className='ScrollCartStyle'>
      {/* for big screens: */}
      <Box sx={{display:{xs:'none',sm:'none', md: 'flex'},height:'83.4vh', backgroundColor:'#d2c9ff',alignItems:'center',justifyContent:'center',flex:'1'}}>
      <CartLScreen/>
      </Box>

      {/* for medium screens: */}
      <Box sx={{display:{xs:'none',sm:'flex', md: 'none'},height:'85vh', backgroundColor:'#d2c9ff',alignItems:'center',justifyContent:'center',flex:'1'}}>
      <CartMScreen/>
      </Box>

      {/* for small screens: */}
      <Box sx={{display:{xs:'flex',sm:'none', md: 'none'},height:'100vh',backgroundColor:'#d2c9ff',justifyContent:'center',flex:'1'}}>
      <CartSScreen/>
      </Box>  
    </div>
  )
};
export default Cart;