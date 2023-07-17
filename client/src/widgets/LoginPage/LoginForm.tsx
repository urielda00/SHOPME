import {Avatar, Button, TextField,Grid,Box,Typography, Container,InputAdornment,IconButton} 
from '@mui/material';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {logged, errorLogged, loggedOut} from '../../features/userSlice';
import ErrorMessages from './ErrorMessages';
// ReactHook:
import { useForm,FieldErrors } from 'react-hook-form';
import React, {useState, useEffect} from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

type FormValues = {
  userName : string
  password : string
};

const SITE_KEY = '6Le6bSMnAAAAAFsg4MZvHcr9FTA5r82NKIsvPjGm';
// need to create anothe view for phones screens.


// The component:
const LoginForm = () => {
  const onCaptchaChange = () =>{ setCaptchaVerified(true) };
  const [passwordEye, setPasswordEye] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const form = useForm<FormValues>({mode:'onChange'});
  const {register, handleSubmit, formState, reset} = form;
  const {errors, isDirty, isValid, isSubmitSuccessful} = formState;
  const handleChangeEyePassword = () => {setPasswordEye(!passwordEye)};
  const dispatch = useDispatch<any>();


  const onSubmit = (data : FormValues)=>{
    // later, import to here the function from services that handle the axios:
    axios.post('http://localhost:5000/auth/login',data)
    .then(response => {
      setTimeout(()=>{
        window.location.replace('/')
      },1000);
      alert(response.data.message)
      window.sessionStorage.setItem('logoutIndicator','true')
      dispatch(logged())
    })
    .catch(error => {
      dispatch(errorLogged(error.response.data.message))
     });
  };

  useEffect(()=>{
    if(isSubmitSuccessful){
      reset()
    } 
  },[isSubmitSuccessful,reset]);

  return (
       <Container sx={containerStyle} maxWidth='sm' component="main" >
         <ErrorMessages/>  
           <Box sx={insideContainerStyle}>
             <Avatar sx={{ m: 2, bgcolor: 'success.main' }}>
               <PersonIcon />
            </Avatar>
            <Typography sx={{mb:-2}} component="h1" variant="h5">
               Sign In
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit(onSubmit)}>
               <Grid container spacing={2}>
               <Grid item xs={12} sm={12}>
                 <TextField
                  fullWidth
                  id='userName'
                  label="User Name"
                  type='text'
                  autoComplete= 'username'
                  {...register('userName',
                  {
                    required : 'User Name Is Required',
                  })}
                  error={!!errors.userName}
                  helperText={errors.userName?.message}/>
               </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  label="Password"
                  id='password'
                  autoComplete="new-password"
                  type={passwordEye? 'text':'password'}
                  InputProps={{ // <-- This is where the toggle button is added.
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleChangeEyePassword}
                        >
                          {passwordEye ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  {
                    ...register('password',
                   {
                    required : 'Password Is Required'
                   })
                  }
                  error={!!errors.password}
                  helperText={errors.password?.message}/>       
              </Grid>
              
              <Grid  item xs={12} sm={12}>
               <ReCAPTCHA
                  id='recaptcha'
                  sitekey={SITE_KEY}
                  onChange={onCaptchaChange}
                  // style={{transform:'scale(0.75)', transformOrigin:'0 0'}}
                 />
                </Grid> 
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              id='submitBtn'
              disabled={!isDirty || !isValid || !captchaVerified }
              sx={{ mt: 3, bgcolor:'success.main',":hover":{backgroundColor:'#5F8D4E'}}}
            >
              Sign In
            </Button>
            <Grid container justifyContent="flex-end">
            <Grid  sx={{mt:7}} item xs={12} sm={6}>
                <Link to='/forgetPass'>
                  Forgot password?
                </Link>
              </Grid>
              <Grid sx={{mt:7,mr:-5}} item xs={12} sm={6}>
                <Link to='/register'>
                  Dont have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box> 
      </Container>
      
  );
}

export default LoginForm;


// Styles here:
const containerStyle ={
  backgroundColor:'#fff',
  borderRadius:'10px',
  height:{md:'550px',sm:'550px',xs:'600px'},
  boxShadow: '-11px 6px 26px -14px rgba(0,0,0,0.52)',
};

const insideContainerStyle:React.CSSProperties = {
  marginTop: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};