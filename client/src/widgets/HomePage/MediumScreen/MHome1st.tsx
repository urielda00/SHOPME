import React from 'react'
import { Box, Button } from '@mui/material';
import back1 from '../../../assets/HomePage/back1.jpg';

 const MHome1st = () => {
  return (
    <Box  style={containerStyle}>
     <Button variant='contained'  style={{position:'relative',left:'65%', top:'25%', width:'160px', height:'60px', backgroundColor:'#FC2947'}}>Shop Now</Button>
    </Box>
  )
}

export default MHome1st;


const containerStyle: React.CSSProperties={
  backgroundImage: `url(${back1})`,
  backgroundRepeat:' no-repeat',
  backgroundSize: 'cover',
  backgroundBlendMode: 'multiply',
  overflow: 'hidden',
  width: '100%',
  height: '84vh',
  display: 'flex',
  alignItems: 'center',
  float: 'none',
  border:'none'
};
