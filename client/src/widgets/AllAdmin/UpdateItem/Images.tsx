import { Grid,TextField,Button } from '@mui/material';
import { toggleUpload } from './Functions';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
const formats = ["image/jpeg", "image/png", "image/jpg"];


 const Images = ({id,register,image,buttonId,imageLength, changeState,imageNumber,errorsperImage}:any) => {

  return (
    <Grid container spacing={2}>
       <Grid item xs={12} sm={12}>
         <TextField
            fullWidth
            sx={{display:'none'}}
            id={id}
            type='file'
            {...register(image,{
             validate:{
              lessThan3MB: (file:any) => file[0]?.size < 1024*1024*5 || "Each image size must be Max 5MB",
              acceptedFormats: (file:any) => formats.includes(file[0]?.type) ||
               "Each image type must be Only PNG, JPEG, JPG",
              },
             onChange : (e:any) =>{changeState(e.target.files[0],image)}
             })} 
             error={!!errorsperImage}
             helperText={errorsperImage?.message}
             />

          <Button sx={{height:'100%',color:'black'}} type='button' 
              id={buttonId} onClick={()=>toggleUpload(image)}>
            {
               imageLength > 0 && !errorsperImage?.message?
               <CheckIcon sx={{marginRight:'4px', color:'green'}}/>:
               <AddIcon sx={{marginRight:'4px'}}/>
            } 
             Upload Image {imageNumber}
          </Button>
           {/* {
              errorsperImage?.message?
             <ErrorMessages error={ errorsperImage?.message}/> :
             <div hidden></div>
           } */}
    </Grid>
  </Grid>
  )
};
export default Images;