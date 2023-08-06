import { Box } from "@mui/material";
import UpdateForm from "../widgets/AllAdmin/UpdateItem/UpdateForm";
 const UpdateItem = () => {
  return (
    <Box sx={backgroundStyle}>
       <UpdateForm/>
    </Box>  
  )
}
export default UpdateItem

const backgroundStyle = {
  width:'100%',
  height:{md:'88vh',sm:'88vh',xs:'90vh'},
  backgroundColor:'#ECE8DD',
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
};
