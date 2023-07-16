import { Box } from '@mui/material';
import LoginForm from '../widgets/LoginPage/LoginForm';

 const LoginPage = () => {
  return (
    <Box sx={backgroundStyle}>
        <Box sx={{display:{xs:'flex',sm:'flex', md: 'flex'}}}>
         <LoginForm/>
        </Box>
    </Box>
  )
}

export default LoginPage;


const backgroundStyle = {
  width:'100%',
  height:{md:'88vh',sm:'88vh',xs:'90vh'},
  backgroundColor:'#ECE8DD',
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
};