import { Box } from '@mui/material';
import Forget from '../widgets/AllResetPass/Forget';


 const ForgetPassPage = () => {
  return (
    <Box sx={backgroundStyle}>
        <Box sx={{display:{xs:'flex',sm:'flex', md: 'flex'}}}>
         <Forget/>
        </Box>
    </Box>
  )
}
export default ForgetPassPage;

const backgroundStyle = {
  width:'100%',
  height:{md:'88vh',sm:'88vh',xs:'90vh'},
  backgroundColor:'#ECE8DD',
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
};