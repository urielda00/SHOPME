import { useParams , Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import {Avatar, Button, TextField,Grid,Box,Typography, Container,IconButton, InputAdornment } from '@mui/material';
import { useForm } from 'react-hook-form';
import LockResetIcon from '@mui/icons-material/LockReset';import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

type FormValues = {
  password : string
  verifyPass : string
};

 const Reset = () => {
  const form = useForm<FormValues>({mode:'onChange'});
  const {register, control, handleSubmit, formState, watch,getValues, reset} = form;
  const {errors, isDirty, isValid, isSubmitSuccessful} = formState;
  const [passwordEyeVerify, setPasswordEyeVerify] = useState(false);
  const [passwordEye, setPasswordEye] = useState(false);
  const handleChangeEyePassword = () => {setPasswordEye(!passwordEye)};
  const handleChangeEyeVerify = () => {setPasswordEyeVerify(!passwordEyeVerify)};
  const password = watch('password');
  const [validUrl, setValidUrl] = useState(false);
	const param = useParams();
  const url = `http://localhost:5000/resetPass/reset/${param.id}/${param.token}`;

  const onSubmit = async(datais : FormValues)=>{

      await axios.post(url, {password: datais.password})
      .then((res)=>{
        setTimeout(()=>{
          window.location.replace('/login')
        },1000);
        alert("Your Password has been updated successfully")})
      .catch((error)=>alert(error.response.data.message))
    };


  useEffect(() => {
		const verifyUrl = async () => {
			try {
				await axios.get(url);
				setValidUrl(true);
			} catch (error) {
				setValidUrl(false);
			}
		};
		verifyUrl();
	}, [param, url]);

  return (
    <Container sx={containerStyle} maxWidth='sm' component="main" >
    <Box sx={insideContainerStyle}>
   
      <Avatar sx={{ m: 2, bgcolor: 'error.main' }}>
         <LockResetIcon />
      </Avatar>

      <Typography sx={{mb:-2}} component="h1" variant="h5">
        Reset Password
      </Typography>
      
      

      <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit(onSubmit)}>
         <Grid container spacing={2}>
         <Grid sx={{position:'relative'}} item xs={12} sm={12}>
         <TextField
             fullWidth
             label="New Password"
             type={passwordEye? 'text':'password'}
             {...register('password',
              {
                required: 'Password Is Required',
              })}
             error={!!errors.password}
             helperText={errors.password?.message}/>

         </Grid>
          
         <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  label="Verify Password"
                  type={passwordEyeVerify? 'text':'password'}
                  InputProps={{ // <-- This is where the toggle button is added.
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleChangeEyeVerify}
                        >
                          {passwordEyeVerify ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  {...register('verifyPass',
                    {
                      required : 'Verify Password Is Required',
                      validate: (value) =>{
                        return(
                          value === password || 'The passwords do not match'
                          )
                      }
                     })}                  
                     error={!!errors.verifyPass}
                     helperText={errors.verifyPass?.message}/>
              </Grid>
       </Grid>

       <Button
         type="submit"
         fullWidth
         variant="contained"
         disabled={!isDirty || !isValid  }
         sx={{ mt: 2, bgcolor:'success.main',":hover":{backgroundColor:'#5F8D4E'}}}
       >
         Submit
       </Button>
       <Grid container justifyContent="flex-end">
       <Grid sx={{mt:4,position:'absolute', left:'5px', top:'-9px'}} item xs={12} sm={12}>
          
       </Grid>
       </Grid>
     </Box>
   </Box>   
 </Container>
  )
}

export default Reset;

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