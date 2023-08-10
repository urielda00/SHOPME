import { Box} from '@mui/material';
import CartLScreen from '../widgets/Cart/CartLScreen';
import CartMScreen from '../widgets/Cart/CartMScreen';
import CartSScreen from '../widgets/Cart/CartSScreen';
import React from 'react';


const CartPage:React.FunctionComponent = () => {
  
  return (
    <div className='ScrollCartStyle'>
      {/* for big screens: */}
      <Box sx={largeStyle}>
      <CartLScreen/>
      </Box>

      {/* for medium screens: */}
      <Box sx={mediumStyle}>
      <CartMScreen/>
      </Box>

      {/* for small screens: */}
      <Box sx={smallStyle}>
      <CartSScreen/>
      </Box>  
    </div>
  )
};
export default CartPage;

// Style here:
const largeStyle = {
  display:{xs:'none',sm:'none', md: 'flex'},
  height:'83.4vh',
  backgroundColor:'#d2c9ff',
  alignItems:'center',
  justifyContent:'center',
  flex:'1'
};

const mediumStyle = {
  display:{xs:'none',sm:'flex', md: 'none'},
  height:'85vh',
  backgroundColor:'#d2c9ff',
  alignItems:'center',
  justifyContent:'center',
  flex:'1'
};

const smallStyle = {
  display:{xs:'flex',sm:'none', md: 'none'},
  height:'100vh',
  backgroundColor:'#d2c9ff',
  justifyContent:'center',
  flex:'1'
};