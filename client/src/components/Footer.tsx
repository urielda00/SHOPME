import {Typography, Box,Container} from '@mui/material';
import { Link} from 'react-router-dom';

function Copyright() {
  return (
    <Box sx={{color:'grey', textAlign:'center'}}>
      {'Copyright © '}
      <Link color="inherit" to='/' style={{textDecoration:'none', color:'inherit'}}>
        Shopme
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Box>
  );
}


export default function Footer() {
  return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100px',
          bottom:'1px'
        }}
      >
        <Box component="footer" sx={{py: 4,backgroundColor: '#EEEEEE', textAlign:'center'}}>
          <Container maxWidth="sm">
            <Typography variant="body1">
              Here is the sticky footer
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
  );
}