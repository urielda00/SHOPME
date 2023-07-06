import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useSelector } from 'react-redux';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
){return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;});
  

 const ErrorMessages=() =>{

  const {warningMessage}= useSelector((state:any)=>state.allCart);
  const [open, setOpen] = React.useState(false);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  React.useEffect(()=>{
   if(warningMessage){
    return setOpen(true)
  }else{
    return setOpen(false)
  } 
  },[warningMessage])

  return (
    <> 
    <Stack spacing={2} sx={{ width: '100%', position:'absolute'}}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {
          warningMessage
          }
        </Alert>
      </Snackbar>
    </Stack>
    </>
  );
}
export default ErrorMessages;