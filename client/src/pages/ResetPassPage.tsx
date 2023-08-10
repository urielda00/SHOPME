import { Box } from '@mui/material';
import Reset from '../widgets/AllResetPass/Reset';
import React from 'react';

 const ResetPassPage:React.FunctionComponent = () => {
  return (
    <Box sx={backgroundStyle}>
        <Box sx={{display:'flex'}}>
         <Reset/>
        </Box>
    </Box>
  )
};

export default ResetPassPage;

const backgroundStyle = {
  width:'100%',
  height:{md:'88vh',sm:'88vh',xs:'90vh'},
  backgroundColor:'#ECE8DD',
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
};


