import React from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Box, IconButton} from "@mui/material";


 const ContactNavbar = () => {
  return (
     <Box id='some' sx={{display:'flex'}}></Box>
    // <Box id='some' style={StyledNavBar} sx={{display:{xs:'none',sm:'flex', md: 'flex'}}}>
      
    //  <IconButton sx={{display:{xs:'none',sm:'flex', md: 'flex'}}}
    //     style={{borderRadius:'10px',fontSize:'1.3vw'}} size="large">
    //     <a style={{textDecoration:'none',color:'#27374D'}} rel="noreferrer" target='_blank' href='mailto:urielda00@gmail.com'>
    //       <EmailOutlinedIcon 
    //        style={{fontSize:'1.3vw', marginRight:'2px', paddingTop:'4px',color:'#1F6E8C'}}/>
    //         ShopMe@gmail.com
    //     </a>
    //  </IconButton>


    //  <IconButton sx={{display:{xs:'none',sm:'flex', md: 'flex'}}} 
    //     style={{borderRadius:'10px',fontSize:'1.3vw'}} size="small">
    //    <a style={{textDecoration:'none',color:'#27374D'}} rel="noreferrer" target='_blank' href='https://wa.link/e4dvyv'>
    //      <WhatsAppIcon fontSize="large" 
    //       style={{fontSize:'1.3vw', marginRight:'2px', paddingTop:'4px',color:'#1F6E8C'}}/>
    //         +972-00-0000-000
    //    </a>
    //  </IconButton>
    // </Box>
  );
}


export default ContactNavbar;


const StyledNavBar:React.CSSProperties= {
  position: 'relative',
  opacity:0.9,
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
