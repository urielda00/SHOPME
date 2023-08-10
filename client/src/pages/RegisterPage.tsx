import { Box } from "@mui/material";
import RegisterForm from "../widgets/RegisterPage/RegisterForm";
import React from "react";

const RegisterPage:React.FunctionComponent = () => {
  return(
    <Box sx={backgroundStyle}>
        <Box sx={{display:'flex'}}>
         <RegisterForm/>
        </Box>
    </Box>
  )
};
export default RegisterPage;

const backgroundStyle = {
  width:'100%',
  height:{md:'88vh',sm:'88vh',xs:'110vh'},
  backgroundColor:'#ECE8DD',
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
};
