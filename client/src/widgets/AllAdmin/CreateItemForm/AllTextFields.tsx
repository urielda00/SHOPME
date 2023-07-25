import { Grid,TextField } from "@mui/material";
import { validateProductNameObj } from "./ValidateObjects";

 const AllTextFields = ({id,label,type,validationObj,register,fieldErrors}:any) => {
  console.log('label:',label);
  console.log('id:',id);
  console.log('type:',type);
  console.log('fieldErrors:',fieldErrors);
  return (
    <>
    <Grid item xs={12} sm={12}>
     <TextField
       fullWidth
       id={id}
       label={label}
       type={type}
       {...register('productName',validationObj)}
       error={!!fieldErrors}
       helperText={fieldErrors?.message}
      />
    </Grid>
  </>
  )
}
export default AllTextFields;