import { Box } from '@mui/material';
import Forget from '../widgets/AllResetPass/Forget';
import Reset from '../widgets/AllResetPass/Reset';


 const ResetPassPage = () => {
  return (
    <Box sx={backgroundStyle}>
        <Box sx={{display:{xs:'flex',sm:'flex', md: 'flex'}}}>
         <Reset/>
        </Box>
    </Box>
  )
}
export default ResetPassPage;

const backgroundStyle = {
  width:'100%',
  height:{md:'88vh',sm:'88vh',xs:'90vh'},
  backgroundColor:'#ECE8DD',
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
};


