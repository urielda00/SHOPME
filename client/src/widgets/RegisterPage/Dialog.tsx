import {Dialog,DialogActions,DialogContent,DialogTitle, Box, Button} from '@mui/material';
import React from 'react';

 const DialogIs = ({open}:any) => {
  const [openPassHelp, setOpenPassHelp] = React.useState(false);
  const handleClickClosePassHelp = () => {setOpenPassHelp(false)};
  React.useEffect(()=>{if(open){setOpenPassHelp(true)}},[open]);
     
  return (
    <Dialog open={openPassHelp} onClose={handleClickClosePassHelp}>
      <DialogTitle>
       {" For the password, please follow the next instructions:"}
      </DialogTitle>
      <DialogContent>       
         <Box>
           1. Password must have at least 1 UpperCase. 
         </Box>
         <Box>
           2. Password must have at least 1 LowerCase.
         </Box>
         <Box>
           3. Password must have at least 1 Digit. 
         </Box>
         <Box>
           4. Password must have at least 6 Characters. 
         </Box>  
      </DialogContent>
      <DialogActions>
         <Button onClick={handleClickClosePassHelp}>Close</Button>
      </DialogActions>
    </Dialog>  
  )
}
export default DialogIs;
