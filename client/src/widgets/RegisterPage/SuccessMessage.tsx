import * as React from 'react';
import Stack from '@mui/material/Stack';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
){return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;});
  
 const SuccessMessage=() =>{
  
  return (
    <>
    {/*  */}
     <Stack spacing={2} sx={{ width: '10%', position:'absolute',bottom:'20px', left:'20px'}}>
          
           {
           
           <Alert  severity='success' sx={{ width: '400px' }}>
            Youre just registered in successfully!
            </Alert>
           }
          
    </Stack>
</>
  );
}
export default SuccessMessage;