import { Box} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

 const OrderCompleted = () => {
  return (
    <Box>
        <Box sx={childContainer1}>
          <h1>We Recived Your Order!</h1>
          <h3>Order Confirmation Has Sent To Your Email.</h3>
           ...(Style and Logic will be added in the future )
           <Link to='/' style={{color:'black'}}>Return To Home Page</Link>
        </Box>
    </Box>
  )
}
export default OrderCompleted;

const childContainer1:React.CSSProperties={
  alignItems:'center',
  marginTop:'20px',
  width:'100%',
  height:'380px',
  display:'flex',
  flexDirection:"column",
};