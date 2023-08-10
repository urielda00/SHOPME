import * as React from 'react';
import { IconButton } from '@mui/material';
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';

 const ScrollToTop:React.FunctionComponent = () => {
  const [button, setButton]= React.useState(false);
  React.useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if (window.scrollY>100){
        setButton(true);
      }else{
        setButton(false);
      }
    })
  },[]);

  return (
    <>
    {
     button&&(
      <IconButton 
        style={{position:'fixed', bottom:'10px',color:'black' ,left:'30px'}}>
         <a href='#some'>
           <KeyboardDoubleArrowUpOutlinedIcon fontSize='large' />
         </a>
      </IconButton>
     )
    }
    </>
  )
};
export default ScrollToTop;
