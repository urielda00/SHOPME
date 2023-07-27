import { Box } from '@mui/material';
import CreateForm from '../widgets/AllAdmin/CreateItemForm/CreateForm';


const CreateItem = () => {
  return (
    <Box sx={backgroundStyle}>
        <Box sx={{display:{xs:'flex',sm:'flex', md: 'flex'}}}>
          <CreateForm/>
        </Box>
    </Box>  
  )
};
export default CreateItem;


const backgroundStyle = {
  width:'100%',
  height:{md:'88vh',sm:'88vh',xs:'90vh'},
  backgroundColor:'#ECE8DD',
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
};
