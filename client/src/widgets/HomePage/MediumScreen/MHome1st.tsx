import React from 'react'
import { Box, Button } from '@mui/material';
import back1 from '../../../assets/HomePage/back1.jpg';
import { Link } from 'react-router-dom';

 const MHome1st = () => {
  return (
    <Box  style={containerStyle}>
       <Link to='/productsList' style={linkStyle}>
         <Button variant='contained' size='large' style={buttonStyle}>
           Shop Now
         </Button>
        </Link>
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

const linkStyle:React.CSSProperties = {
  position:'relative',
  left:'65%',
  top:'25%',
  width:'160px',
  height:'60px',
  backgroundColor:'#FC2947'
  };

  const buttonStyle:React.CSSProperties = {
    width:'100%',
    height:'100%',
    backgroundColor:'#FC2947'
  };