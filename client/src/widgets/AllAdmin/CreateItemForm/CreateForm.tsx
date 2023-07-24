import {Avatar, Button, TextField,Grid,Box,Typography, 
  Container,IconButton} from '@mui/material';
import axios from 'axios';
import {containerStyle,insideContainerStyle,stepsP,stepIconButton} from '../../../styles/CreateItemForm/CreateItemForm';
// Local Imports:
import { validateImagesObj, validateShortObj, validateProductNameObj, validateLongObj,
 companyObj,brandObj,categoryObj, osObj, priceInputProps, required } from './ValidateObjects';
import { logged, errorLogged ,isAdmin} from '../../../features/userSlice';
import ErrorMessages from './ErrorMessages';
import renderButton from './RenderButton';
import { toggleUpload } from './Functions';
import ItemSaved from './ItemSaved';

// Hooks and Icons:
import { useDispatch } from 'react-redux';
import { useForm} from 'react-hook-form';
import React, {useState, useEffect} from 'react';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

type FormValues = {
  productName : string
  shortDescription : string
  longDescription : string
  price : number
  quantity : string
  productImages : [string]
  company : string
  releaseYear : number
  os : string
  brand : string
  category : string
  screenshot :[string]
};

// The Component:
const CreateForm = () => {
  // Steps inside the form:
  const [step, setStep] = useState(1);
  const nextStep = () => {setStep( prev => prev + 1);}; 
  const prevStep = () => {setStep( prev => prev - 1);}; 
  const [file, setFile] = useState<any>(null);
  const [file2, setFile2] = useState<any>(null);
  // Useform Hook:
  const form = useForm<FormValues>({mode:'onChange'});
  const {register, handleSubmit, formState, reset, watch} = form;
  const {errors, isDirty, isValid, isSubmitSuccessful} = formState;

  const images = watch('screenshot');
  const imagesLength = images?.length;
  const dispatch = useDispatch();
  const [multipleImages, setMultipleImages] = useState<any>([]);
   
  const onSubmit = async (data : any)=>{
    let formData = new FormData();
    formData.append("screenshot", file);
    formData.append("screenshot2", file2);
    axios.post("http://localhost:5000/product/createProduct", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((res:any) => {
      console.log("Success ", res);
    });
    // const res = await fetch('http://localhost:5000/product/istest', {
    //     method: "POST",
    //     body: formData,
    // }).then((res) => res.json());
  };

  // test start here

  let fileReader:any;
  
  const handleFileRead = (e:any) => {
    const content = fileReader.result;
    console.log(content)
    axios.post('http://localhost:5000/product/istest',content)
    // … do something with the 'content' …
  };
  
  const handleFileChosen = (file:any) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };
  



  //test end here
  

  return (
       <Container sx={containerStyle} maxWidth='sm' component="main" >  
           <Box sx={insideContainerStyle}>
             <Avatar sx={{ m: 2, bgcolor: 'success.main'}}>
               <AddIcon/>
             </Avatar>
             
             <Typography sx={{mb:-2,position:'relative'}} component="h1" variant="h5">
                {
                  step <= 3 && 
                  <p style={stepsP}>Step {step} of 3 </p>          
                }
                { 
                step < 4 && step > 1 ? 
                  <IconButton size='small' style={stepIconButton} onClick={prevStep}>
                    <ArrowBackIosIcon fontSize='small' />
                  </IconButton>:<div hidden></div>
                }
                {
                  step <= 3 ? 'Create Item' : 'Item Created Successfully'
                }              
             </Typography>
             <form  encType='multipart/form-data' noValidate 
                   onSubmit={handleSubmit(onSubmit)}>
                { 
                 step === 1 && (
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <TextField
                        fullWidth
                        id='productName'
                        label="Product Name"
                        type='text'
                        {...register('productName',validateProductNameObj)}
                        error={!!errors.productName}
                        helperText={errors.productName?.message}
                       />
                    </Grid>
                
                    <Grid item xs={12} sm={12}>
                       <TextField
                         fullWidth
                         label="Short Description"
                         id='shortDescription'
                         type='text'
                         {...register('shortDescription',validateShortObj)}
                         error={!!errors.shortDescription}
                         helperText={errors.shortDescription?.message}
                         />       
                    </Grid> 
                    <Grid item xs={12} sm={12}>
                       <TextField
                         fullWidth
                         label="Long Description"
                         id='longDescription'
                         type='text'
                         {...register('longDescription', validateLongObj)}  
                         error={!!errors.longDescription}
                         helperText={errors.longDescription?.message}
                         />       
                    </Grid> 
                  </Grid>
                  )}
                {
                  step == 2 && (
                    <Grid container spacing={2}>
                       <Grid item xs={12} sm={12}>
                         <TextField
                            fullWidth
                            label="Item Quantity"
                            id='quantity'
                            type='number'
                            {...register('quantity',required)}
                            error={!!errors.quantity}
                            helperText={errors.quantity?.message}
                          />       
                       </Grid>

                       <Grid item xs={12} sm={12}>
                         <TextField
                           fullWidth
                           label="Company"
                           id='company'
                           type='texy'
                           {
                             ...register('company',companyObj)
                           }
                           error={!!errors.company}
                           helperText={errors.company?.message}
                          />       
                       </Grid>

                       <Grid item xs={12} sm={12}>
                         <TextField
                            fullWidth
                            label="Item Price"
                            id='price'
                            type='number'
                            InputProps={priceInputProps}
                            {...register('price',required)}
                            error={!!errors.price}
                            helperText={errors.price?.message}
                          />       
                       </Grid>
{/*  */}
                       <Grid item xs={12} sm={12}> 
                          <TextField
                            fullWidth
                            sx={{display:'none'}}
                            label="screenshot"
                            id='screenshot'
                            type='file'
                            {...register('screenshot',validateImagesObj)}  
                            helperText={errors.screenshot?.message}
                          />
  
                         <Button sx={{height:'100%',color:'black'}} type='button' 
                            id='uploadbtn' onClick={toggleUpload}>
                            {
                               imagesLength > 0 && !errors.screenshot?.message?
                               <CheckIcon sx={{marginRight:'4px', color:'green'}}/>:
                               <AddIcon sx={{marginRight:'4px'}}/>
                            } 
                            Upload Images
                          </Button> 
                          {
                           errors.screenshot?.message?
                            <ErrorMessages error={ errors.screenshot?.message}/> :
                            <div hidden></div>
                          }
                       </Grid>
                       {/* <TextField
                            fullWidth
                            
                            label="Images"
                            type='file'
                            inputProps={{multiple: true}} 
                            {...register('screenshot',validateImagesObj)} 
                            onChange={(e:any) => {
                              setFile(e.target.files[0]);
                            }} 
                          />
                          {
                           errors.productImages?.message?
                            <ErrorMessages error={ errors.screenshot?.message}/> :
                            <div hidden></div>
                          } */}
                       {/* <input
        type="file"
        name="screenshot"
        onChange={(e:any) => {
          setFile(e.target.files[0]);
        }}
      /> */}

        <input
        type="file"
        name="screenshot2"
        onChange={(e:any) => {
          setFile2(e.target.files[0]);
        }}
      />
      

                    </Grid>
                   )} 
                   {step == 3 && (
                     <Grid container spacing={2}>         
                       <Grid item xs={12} sm={12}>
                         <TextField
                           fullWidth
                           label="Release Year"
                           id='releaseYear'
                           type='number'
                           {...register('releaseYear',required)}
                           error={!!errors.releaseYear}
                           helperText={errors.releaseYear?.message}
                           />       
                       </Grid>

                       <Grid item xs={12} sm={12}>
                         <TextField
                           fullWidth
                           label="Item Operation System"
                           id='os'
                           type='text'
                           { ...register('os',osObj)}
                           error={!!errors.os}
                           helperText={errors.os?.message}
                           />       
                       </Grid>

                       <Grid item xs={12} sm={12}>
                         <TextField
                           fullWidth
                           label="Brand"
                           id='brand'
                           type='text'
                           {...register('brand',brandObj)}  
                           error={!!errors.brand}
                           helperText={errors.brand?.message}
                           />       
                       </Grid>

                       <Grid item xs={12} sm={12}>
                         <TextField
                           fullWidth
                           label="Category"
                           id='category'
                           type='text'
                           {...register('category',categoryObj)} 
                           error={!!errors.category}
                           helperText={errors.category?.message}
                           />       
                        </Grid>
                     </Grid>
                    )}
                    {
                     step == 4 && (
                      <Grid container spacing={2}>
                        <ItemSaved/>
                      </Grid>
                     )}                   
                    {renderButton(step,nextStep,isValid,isDirty)}       
           </form>
         </Box> 
      </Container> 
  );
};
export default CreateForm;

// useEffect(()=>{
//   if(isSubmitSuccessful){
//     reset()
//   } 
// },[isSubmitSuccessful,reset]);