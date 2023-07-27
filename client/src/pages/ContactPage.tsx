import { Box } from "@mui/material"
import Contact from '../widgets/Contact/Contact';

const ContactPage = () => {
  return (
    <Box>
      <Contact/>
    </Box>
  )
};

export default ContactPage;

const backgroundStyle = {
  width:'100%',
  height:{md:'88vh',sm:'88vh',xs:'110vh'},
  backgroundColor:'#ECE8DD',
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
};