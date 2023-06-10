import * as React from 'react';
import back1 from '../assets/HomePage/back1.jpg';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const HomePage = () => {
  return (
    <div>
    <div style={containerStyle}>
     <Button variant='contained'  style={{position:'fixed', bottom:'30%',color:'black' ,right:'15%', width:'160px', height:'60px', backgroundColor:'#FC2947'}}>Buy Now</Button>
    </div>
    </div>
  )
}

export default HomePage;

const containerStyle: React.CSSProperties={
  backgroundImage: `url(${back1})`,
  marginBottom: '-80px',
  backgroundRepeat:' no-repeat',
  backgroundSize: 'cover',
  backgroundBlendMode: 'multiply',
  overflow: 'hidden',
  // opacity: 0.97,
  width: '100%',
  height: '83vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent:'space-between',
  float: 'none',
  
}
