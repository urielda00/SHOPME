import {Avatar, Button, TextField,Grid,Box,Typography, Container,Alert } 
from '@mui/material';
import { Link } from 'react-router-dom';
import SecurityIcon from '@mui/icons-material/Security';
import ReCAPTCHA from 'react-google-recaptcha';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import axios from 'axios';

// ReactHook:
import { useForm } from 'react-hook-form';
import React, {useState, useEffect} from 'react';


type FormValues = {
  email : string
};

const SITE_KEY = '6Le6bSMnAAAAAFsg4MZvHcr9FTA5r82NKIsvPjGm';


// The component:
const Forget = () => {
  const onCaptchaChange = () =>{ setCaptchaVerified(true) };
  const [sentMail, SetsentMail] = useState<boolean>(false);
  const [passwordEye, setPasswordEye] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const form = useForm<FormValues>({mode:'onChange'});
  const {register, handleSubmit, formState, reset} = form;
  const {errors, isDirty, isValid, isSubmitSuccessful} = formState;
  const handleChangeEyePassword = () => {setPasswordEye(!passwordEye)};
  const onSubmit = async(datais : FormValues)=>{
		 const url = 'http://localhost:5000/resetPass/';
		 await axios.post(url, {email:datais.email})
     .then(()=>{SetsentMail(true)})
     .catch((error=>{
      SetsentMail(false)
     }))
    };

  useEffect(()=>{
    const captchaVerified = () =>{ setCaptchaVerified(true) };
    if(isSubmitSuccessful){reset()}
    
  },[isSubmitSuccessful,reset]);
  return (
       <Container sx={containerStyle} maxWidth='sm' component="main" >
         <Box sx={insideContainerStyle}>
         {
          sentMail&&<Alert sx={{position:'absolute', top:'-70px', right:'20px'}} severity="success" variant="filled" onClose={() => {SetsentMail(false)}}>Reset Link Has Sent To Your Email.
          </Alert>
         }
           <Avatar sx={{ m: 2, bgcolor: 'error.main' }}>
              <SecurityIcon />
           </Avatar>

           <Typography sx={{mb:-2}} component="h1" variant="h5">
             Forgot Password
           </Typography>
           
           <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
              <Grid sx={{position:'relative'}} item xs={12} sm={12}>
              <TextField
                  fullWidth
                  label="Email Address"
                  autoComplete="email"
                  type='email'
                  {...register('email',
                   {
                     required: 'Email Is Required',
                     pattern : {
                       value : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                       message :'Invalid Email format',
                     },
                     validate: {
                       emailAvailable : async (fieldValue)=>{
                         while(fieldValue.length>=3 && fieldValue.includes('@')){
                           const res = await fetch(`http://localhost:5000/auth/checkIfExist/${fieldValue}`);
                           const data = await res.json();
                           return data.length !== 0 ||'Email Dont Exist'
                         }    
                      }
                     },
                   })}
                  error={!!errors.email}
                  helperText={errors.email?.message}/>

              </Grid>
              <Grid sx={{ml:8}} item xs={12} sm={4}>
               <ReCAPTCHA
                  sitekey={SITE_KEY}
                  onChange={onCaptchaChange}
                  style={{transform:'scale(0.75)', transformOrigin:'0 0'}}
                 />
                </Grid>  
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={!isDirty || !isValid || !captchaVerified }
              sx={{ mt: 2, bgcolor:'success.main',":hover":{backgroundColor:'#5F8D4E'}}}
            >
              Submit
            </Button>
            <Grid container justifyContent="flex-end">
            <Grid sx={{mt:4,position:'absolute', left:'5px', top:'-9px'}} item xs={12} sm={12}>
                <Link to='/login' style={{textDecoration:'none', color:'black'}}>
                 <KeyboardReturnIcon fontSize='medium' />
                </Link>
            </Grid>
            </Grid>
          </Box>
        </Box>   
      </Container>
      
  );
}

export default Forget;


// Styles here:
const containerStyle ={
  backgroundColor:'#fff',
  borderRadius:'10px',
  height:{md:'370px',sm:'370px',xs:'370px'},
  width: {md:'400px',sm:'400px',xs:'400px'},
  boxShadow: '-11px 6px 26px -14px rgba(0,0,0,0.52)',
};

const insideContainerStyle:React.CSSProperties = {
  marginTop: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position:'relative'
};