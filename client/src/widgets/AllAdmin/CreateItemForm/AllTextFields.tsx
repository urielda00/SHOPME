import { Grid,TextField } from "@mui/material";

 const AllTextFields = ({id,label,type,validationObj,register,fieldErrors}:any) => {
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
};
export default AllTextFields;