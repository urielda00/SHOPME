import { Box } from "@mui/material"
import LargeMediumRegister from "../widgets/RegisterPage/LargeMediumRegister";



const RegisterPage = () => {
  return(
    <Box sx={backgroundStyle}>
        {/* Big & Medium screens: */}
        <Box sx={{display:{xs:'none',sm:'flex', md: 'flex'}}}>
         <LargeMediumRegister/>
        </Box>
  
        {/* Small screens: */}
        <Box sx={{display:{xs:'flex',sm:'none', md: 'none'}}}>
           some component here
        </Box>
    </Box>
  )

}
export default RegisterPage;

const backgroundStyle:React.CSSProperties = {
  width:'100%',
  height:'88vh',
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