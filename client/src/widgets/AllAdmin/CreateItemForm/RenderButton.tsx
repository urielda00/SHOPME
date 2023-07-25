import { Button } from "@mui/material";

const renderButton = (step:any, nextStep:any, isValid:boolean, isDirty:boolean) =>{
  if(step > 4 ){
    return undefined;
  }else if(step == 4){
    return (
      <Button
      type="submit"
      fullWidth
      variant="contained"
      id='submitBtn'
      disabled={ !isValid }
      sx={{ mt: 3, bgcolor:'success.main',":hover":{backgroundColor:'#5F8D4E'}}}
    >
      Create New Item
    </Button>
    )
  }else{
    return (
      <Button
      type="button"
      fullWidth
      variant="contained"
      id='submitBtn'
      onClick={nextStep}
      disabled={!isDirty || !isValid }
      sx={{ mt: 3, bgcolor:'success.main',":hover":{backgroundColor:'#5F8D4E'}}}
    >
      Next
    </Button>
    )
  }
}
export default renderButton;