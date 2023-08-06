import React from 'react'
import { DeleteForm } from '../widgets/AllAdmin/DeleteItem/DeleteForm';
import { Box } from '@mui/material';

 const DeleteItem = () => {
  return (
    <Box sx={backgroundStyle}>
      <DeleteForm/>
    </Box>
  )
}

export default DeleteItem;

const backgroundStyle = {
  width:'100%',
  height:{md:'88vh',sm:'88vh',xs:'90vh'},
  backgroundColor:'#ECE8DD',
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
};
