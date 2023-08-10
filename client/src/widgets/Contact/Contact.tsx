import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PhoneIcon from '@mui/icons-material/Phone';
import Typography from '@mui/material/Typography';


export default function SignInSide() {
  return (
      <Grid container component="main" sx={{ height: '88vh' }}>
        <Grid item xs={false} sm={4} md={7} sx={imageContainerStyle}/>
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box sx={{my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Avatar sx={{ m:1, bgcolor: 'secondary.main' }}>
                <PhoneIcon/>
              </Avatar>
              <Typography sx={{mb:3}} component="h1" variant="h5">
                Contact Us
              </Typography>
            <Box 
            action='https://formsubmit.co/shopme2024@gmail.com'
            method="POST"
            component="form" 
            id='contactForm'     
            sx={{ mt: 1 }}>
              <input type="hidden" name="_next" value="https://bejewelled-fenglisu-523224.netlify.app/thankYou"></input>
              <input type="hidden" name="_subject" value="New Contacter From Shopme"></input>
              <input type="hidden" name="_template" value="table"/>
              <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                  <TextField
                  required
                  autoComplete="email"
                  id='email'
                  name="email"
                  fullWidth
                  label="Email Address"
                  type='email'/>     
              </Grid>

              <Grid item xs={12} sm={6}>
                  <TextField
                  required
                  autoComplete="phone"
                  fullWidth
                  id='phone'
                  name="phone"
                  label="Phone Number"
                  type='tel'/>
              </Grid>

              <Grid item xs={12} sm={6}>
                  <TextField
                  required
                  autoComplete="given-name"
                  fullWidth
                  label="First Name"
                  id='fName'
                  name="fName"
                  type='text'/>
              </Grid>

              <Grid item xs={12} sm={6}>
                  <TextField
                  required
                  autoComplete="family-name"
                  fullWidth
                  label="Last Name"
                  id='lName'
                  name="lName"
                  type='text'/> 
              </Grid>

              <Grid item xs={12} sm={12}>
                  <TextField
                  fullWidth
                  rows={4}
                  label="Provide information here..."
                  type='text'
                  id='moreInfo'
                  name="moreInfo"
                  multiline={true}/>               
              </Grid>

              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                SUbmit
              </Button>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
  );
};


const imageContainerStyle = {
  backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};