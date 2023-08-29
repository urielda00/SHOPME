import { Box,Container, Avatar,Typography,Grid,TextField, Button } from '@mui/material';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

export const DeleteForm = () => {
  const [id,setId] = useState('');
  
  const handleSubmit = async(e:any)=>{
    e.preventDefault();
    axios.post(`http://localhost:5000/product/deleteProduct`,{id})
    .then((res)=>{
      alert('success');
    })
    .catch((err)=>{
      alert('err');
    })
  }

  return (
    
       <Container sx={containerStyle} maxWidth='sm' component="main">
        <Box sx={insideContainerStyle}>
           <Avatar sx={{ m: 0.5,mt:2, bgcolor: 'secondary.main' }}>
              <DeleteIcon/>
           </Avatar>
           <Typography sx={{mb:-3,mt:2}} component="h1" variant="h5">
             Delete Item
           </Typography>

           <Grid component='form' method='post' onSubmit={handleSubmit} sx={{mt:4}} container spacing={2}>
                    
                    <Grid item xs={12} sm={12}>
                      <TextField
                         required
                        fullWidth
                        id='productID'
                        label="product ID"
                        type='text'
                        onChange={(e:any) => {setId(e.target.value)}}/>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <Button
                        sx={{backgroundColor:'#EA1179',color:'black'}}
                        fullWidth
                        type='submit'
                       >Send</Button>
                    </Grid>
                </Grid>
           </Box>
        </Container>
  )
};

// Style:
const containerStyle ={
  backgroundColor:'#fff',
  borderRadius:'10px',
  height:{md:'350px',sm:'350px',xs:'400px'},
  boxShadow: '-11px 6px 26px -14px rgba(0,0,0,0.52)',
};

const insideContainerStyle:React.CSSProperties = {
  marginTop: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};