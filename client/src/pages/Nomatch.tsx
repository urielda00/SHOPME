import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


const NoMatch= ()=>{
  return(
    <div style={Container}>
    <div style={InsideDiv}>
      <h2>Oops! Page not found.</h2>
      <h1 id='h1-notMatch'>404</h1>
      <p>We can't find the page you're looking for.</p>
      <Link  to='/'>
        <Button variant="contained" style={{borderRadius:'20px',backgroundColor:'#fff',color:'black', marginTop:'10px'}}>Back To Home</Button>
      </Link>
    </div>
    </div>
  )
}

export default NoMatch;

//component's style here:
const Container:React.CSSProperties={
  width: '100%',
  height: '100vh',
  marginBottom: '-80px',
  display: 'flex',
  alignItems: 'center',
  float:'none',
  justifyContent: 'center',
  margin: '0',
  padding: '0',
  fontFamily: '"montserrat",sans-serif',
  minHeight: '100vh',
  backgroundImage: 'linear-gradient(125deg,#6a89cc,#b8e994)',
};
  

const InsideDiv:React.CSSProperties= {
  width: '100%',
  position: 'absolute',
  top: '50%',
  marginTop: '3%',
  transform: 'translateY(-50%)',
  textAlign: 'center',
  color: '#343434'
};
