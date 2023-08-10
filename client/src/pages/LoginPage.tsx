import { Box } from '@mui/material';
import LoginForm from '../widgets/LoginPage/LoginForm';
import React from 'react';

 const LoginPage:React.FunctionComponent = () => {
  return (
    <Box sx={backgroundStyle}>
        <Box sx={{display:'flex'}}>
         <LoginForm/>
        </Box>
    </Box>
  )
};

export default LoginPage;

const backgroundStyle = {
  width:'100%',
  height:{md:'88vh',sm:'88vh',xs:'90vh'},
  backgroundColor:'#ECE8DD',
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
};