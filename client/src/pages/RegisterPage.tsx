import { Box } from "@mui/material"
import RegisterForm from "../widgets/RegisterPage/RegisterForm";

const RegisterPage = () => {
  return(
    <Box sx={backgroundStyle}>
        <Box sx={{display:{xs:'flex',sm:'flex', md: 'flex'}}}>
         <RegisterForm/>
        </Box>
    </Box>
  )
}
export default RegisterPage;

const backgroundStyle = {
  width:'100%',
  height:{md:'88vh',sm:'88vh',xs:'110vh'},
  backgroundColor:'#ECE8DD',
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
};




//the react-form-hook track the form state without re-rendering the the component!
//by using the handleSubmit on the form hook, the callback passed to this function now have access to the form data.


 {/* need to add captcha! */}

  // const handleSubmit= async (e:any)=>{
  //   e.preventDefault();
  //   try {
  //     const res= await axios.post('http://localhost:5000/auth/register',
  //     {
   
  //     });
  //     setSuccess(res.data);
  //     window.location.replace('/login'); 
  //   } catch (error:any) {
  //     setError(error.response.data);
  //   }};
    
    // const revealPass = () => {
    //   let pass = document.getElementById('pass1');
    //   let repeatedPass= document.getElementById('pass2');
    //   if (pass.type === "password" && repeatedPass.type=== 'password') {
    //    pass.type = "text";
    //    repeatedPass.type = "text";
    //   } else {
    //    pass.type = "password";
    //    repeatedPass.type = "password";
    //   }
    //  }

{/* need to add button to reveal the password. */}
//לעשות תמונת פרופיל שתהיה עם האות הראשונה של שם המשתמש
  // mui avatar