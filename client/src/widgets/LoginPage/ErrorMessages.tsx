import * as React from 'react';
import Stack from '@mui/material/Stack';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useSelector } from 'react-redux';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
){return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;});
  
 const ErrorMessages=() =>{
  const {loginError} = useSelector((state:any) => state.user);

  return (
     <Stack spacing={2} sx={{ zIndex:20,width: '10%', position:'absolute',top:'120px', left:'20px'}}>
        {
         loginError?
         <Alert  severity="error" sx={{ width: '350px' }}>
           {loginError}
         </Alert>:<div hidden></div>
        }     
    </Stack>

  );
}
export default ErrorMessages;