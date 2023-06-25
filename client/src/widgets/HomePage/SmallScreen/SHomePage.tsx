import React from 'react';
import back1 from '../../../assets/HomePage/back1.jpg';
import { Box, Button } from '@mui/material';

 const SHomePage = () => {
  return (
    <Box  style={containerStyle}>
     <Button variant='contained'  style={{position:'relative',left:'33%', top:'25%', width:'160px', height:'60px', backgroundColor:'#FC2947'}}>Buy Now</Button>
    </Box>
  )
};
export default SHomePage;


const containerStyle: React.CSSProperties={
  backgroundImage: `url(${back1})`,
  backgroundRepeat:' no-repeat',
  backgroundSize: 'cover',
  backgroundBlendMode: 'multiply',
  overflow: 'hidden',
  width: '100%',
  height: '40vh',
  display: 'flex',
  alignItems: 'center',
  float: 'none',
  border:'none'
}
