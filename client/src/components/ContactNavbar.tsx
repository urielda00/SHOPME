import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Box, IconButton, Stack } from "@mui/material";
import { Link } from "react-router-dom";


 const ContactNavbar = () => {
  return (

    <Box id='some' style={StyledNavBar} sx={{display:{xs:'none',sm:'flex', md: 'flex'}}}>
      
     <IconButton sx={{display:{xs:'none',sm:'flex', md: 'flex'}}}
        style={{borderRadius:'10px',fontSize:'1.3vw'}} size="small">
        <Link style={{textDecoration:'none',color:'#27374D'}} to='mailto:urielda00@gmail.com'>
          <EmailOutlinedIcon 
           style={{fontSize:'1.3vw', marginRight:'2px', paddingTop:'4px',color:'black'}}/>
            Urielda00@gmail.com
        </Link>
     </IconButton>


     <IconButton sx={{display:{xs:'none',sm:'flex', md: 'flex'}}} 
        style={{borderRadius:'10px',fontSize:'1.3vw'}} size="small">
       <Link style={{textDecoration:'none',color:'#27374D'}} to='https://wa.link/e4dvyv'>
         <WhatsAppIcon fontSize="small" 
          style={{fontSize:'1.3vw', marginRight:'2px', paddingTop:'4px',color:'black'}}/>
            +972-00-0000-000
       </Link>
     </IconButton>
    </Box>
  );
}


export default ContactNavbar;


const StyledNavBar:React.CSSProperties= {
  position: 'relative',
  opacity:0.85,
  top:'0',
  width: '100%',
  background: '#9BABB8',
  display:'flex',
  alignItems: 'center',
  justifyContent:"space-around",
  padding: '16px 16px',
  overflow:'hidden',
  height: '10px'
};
