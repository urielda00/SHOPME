import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import {Avatar, Button, TextField,Grid,Box,Typography, Container,IconButton, InputAdornment } from '@mui/material';
import { useForm } from 'react-hook-form';
import LockResetIcon from '@mui/icons-material/LockReset';import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import DialogIs from "../RegisterPage/Dialog";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ErrorMessages from "./ErrorMessages";
type FormValues = {
  password : string
  verifyPass : string
};


 const Reset = () => {
  const form = useForm<FormValues>({mode:'onChange'});
  const {register, handleSubmit, formState, watch, reset} = form;
  const {errors, isDirty, isValid, isSubmitSuccessful} = formState;
  const [passwordEyeVerify, setPasswordEyeVerify] = useState(false);
  const [passwordEye, setPasswordEye] = useState(false);
  const handleChangeEyePassword = () => {setPasswordEye(!passwordEye)};
  const handleChangeEyeVerify = () => {setPasswordEyeVerify(!passwordEyeVerify)};
  const password = watch('password');
  const [validUrl, setValidUrl] = useState(false);
	const param = useParams();
  const url:string = `http://localhost:5000/resetPass/reset/${param.id}/${param.token}`;
  const [openPassHelp, setOpenPassHelp] = useState(false);

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


  useEffect(()=>{
    if(isSubmitSuccessful){
      reset()
    } 
  },[isSubmitSuccessful,reset]);
  let testArr = [];
  if(errors.password){
    testArr.push(errors.password.message)
  }else{
    testArr = []
  }

  // Rejex for password validation:
  const upperCaseRjx = /(?=.*?[A-Z])/;
  const lowerCaseRjx = /(?=.*?[a-z])/;
  const digitRjx = /(?=.*?[0-9])/;
  const min4Rjx = /.{4,}/;
  return (
    <Container sx={containerStyle} maxWidth='sm' component="main" >
    <Box sx={insideContainerStyle}>
   
      <Avatar sx={{ m: 2, bgcolor: 'error.main' }}>
         <LockResetIcon />
      </Avatar>

      <Typography sx={{mb:-2}} component="h1" variant="h5">
        Set New Password
      </Typography>
      
      

      <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit(onSubmit)}>
         <Grid container spacing={2}>
         <Grid sx={{position:'relative'}} item xs={12} sm={12}>
         <TextField
             fullWidth
             label="New Password"
             type={passwordEye? 'text':'password'}
                  InputProps={{ // <-- This is where the toggle button is added.
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={()=>{
                              setOpenPassHelp(true);
                              setTimeout(() => {
                              setOpenPassHelp(false)
                              }, 1000);
                              }}>
                            <HelpOutlineIcon/>
                          </IconButton>
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleChangeEyePassword}
                        >
                          {passwordEyeVerify ? <VisibilityIcon /> : <VisibilityOffIcon />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
             {...register('password',
              {
                required: 'Password Is Required',
                validate : {
                  hasUpperCase: (value) => upperCaseRjx.test(value) || 'Password Must have at least 1 UpperCase',
                  hasLowerCase: (value) => lowerCaseRjx.test(value) || 'Password Must have at least 1 LowerCase',
                  hasDigitCase: (value) => digitRjx.test(value) || 'Password Must have at least 1 Digit',
                  has6Characters: (value) => min4Rjx.test(value) || 'Password Must have at least 4 Characters',
                  },
              })}
             error={!!errors.password}
             helperText={errors.password?.message}/>
             <DialogIs open={openPassHelp}/>
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
   <ErrorMessages errors={testArr}/>
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