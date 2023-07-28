import React from 'react'
import SpeedDialCheckout from '../widgets/Checkout/SpeedDial';
import { Box } from '@mui/material';

 const CheckOut = () => {
  return (
    <Box sx={backgroundStyle}>
      <SpeedDialCheckout/>
    </Box>
  )
}
export default CheckOut;

const backgroundStyle = {
  width:'100%',
  height:{md:'88vh',sm:'88vh',xs:'90vh'},
  backgroundColor:'#d2c9ff',
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
};