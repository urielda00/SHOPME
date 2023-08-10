// This component for now is mean to be for use in the roll-up button. (the button navigate to this Id)

import { Box} from "@mui/material";
import React from "react";

const ContactNavbar:React.FunctionComponent = () => {
  return (
     <Box id='some' sx={{display:'flex'}}></Box>
   
  );
}

export default ContactNavbar;








// This is the demo , delete later.

// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
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
// const StyledNavBar:React.CSSProperties= {
//   position: 'relative',
//   opacity:0.9,
//   top:'0',
//   width: '100%',
//   background: '#9BABB8',
//   display:'flex',
//   alignItems: 'center',
//   justifyContent:"space-around",
//   padding: '16px 16px',
//   overflow:'hidden',
//   height: '10px'
// };