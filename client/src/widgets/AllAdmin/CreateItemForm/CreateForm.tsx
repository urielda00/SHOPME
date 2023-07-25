import {Avatar, Button, TextField,Grid,Box,Typography, 
  Container,IconButton} from '@mui/material';
import axios from 'axios';
import {containerStyle,insideContainerStyle,stepsP,stepIconButton} from '../../../styles/CreateItemForm/CreateItemForm';
import SubmitFunc from './SubmitFunc';
import Images from './Images';

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

export type FormValues = {
  productName : string
  shortDescription : string
  longDescription : string
  price : number
  quantity : string
  company : string
  releaseYear : number
  os : string
  brand : string
  category : string
  image1 :[string]
  image2 :[string]
  image3 :[string]
  image4 :[string]
};

// The Component:
const CreateForm = () => {
  const formats = ["image/jpeg", "image/png", "image/jpg"];

  // Form State- Steps & Images:
  const [step, setStep] = useState(1);
  const [image1, setImage1] = useState<any>(null);
  const [image2, setImage2] = useState<any>(null);
  const [image3, setImage3] = useState<any>(null);
  const [image4, setImage4] = useState<any>(null);
  const nextStep = () => {setStep( prev => prev + 1);}; 
  const prevStep = () => {setStep( prev => prev - 1);}; 

// 
  // Useform Hook:
  const form = useForm<FormValues>({mode:'onChange'});
  const {register, handleSubmit, formState, reset, watch} = form;
  const {errors, isDirty, isValid, isSubmitSuccessful} = formState;

  
  const isimage1 = watch('image1');
  const isimage2 = watch('image2');
  const isimage3 = watch('image3');
  const isimage4 = watch('image4');
  const image1Length = isimage1?.length;
  const image2Length = isimage2?.length;
  const image3Length = isimage3?.length;
  const image4Length = isimage4?.length;
  const dispatch = useDispatch();

  // local functions:
  const onSubmit = async (data : any)=>{
    SubmitFunc(image1,image2,data);
    //send also the data.

   
  };
   function changeState(newValue:any,image:any):void{
    switch (image) {
      case 'image1':
        setImage1(newValue)
        break;
      case 'image2':
        setImage2(newValue)
        break;
      case 'image3':
        setImage3(newValue)
        break;
      case 'image4':
        setImage4(newValue)
    }
    };
  return (
       <Container sx={containerStyle} maxWidth='sm' component="main" >  
           <Box sx={insideContainerStyle}>
             <Avatar sx={{ m: 2, bgcolor: 'success.main'}}>
               <AddIcon/>
             </Avatar>
             
             <Typography sx={{mb:2,position:'relative'}} component="h1" variant="h5">
                {
                  step <= 3 && 
                  <p style={stepsP}>Step {step} of 4 </p>          
                }
                { 
                step < 4 && step > 1 ? 
                  <IconButton size='small' style={stepIconButton} onClick={prevStep}>
                    <ArrowBackIosIcon fontSize='small' />
                  </IconButton>:<div hidden></div>
                }
                {
                step === 4 ? 
                  <IconButton size='small' style={stepIconButton} onClick={()=>window.location.reload()}>
                    reset
                  </IconButton>:<div hidden></div>
                }
                {
                  step <= 4 ? 'Create Item' : 'Item Created Successfully'
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
          setImage2(e.target.files[0]);
        }}
      />
      

                    </Grid>
                   )} 
                   {step == 3 && (
                     <Grid container spacing={2}>         
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
                        
                        <Grid item xs={12} sm={12}>
                          <Images id='image1' register={register} image='image1' errors={errors} 
                          buttonId='uploadbtn1' imageLength={image1Length} changeState={changeState} 
                          imageNumber={1} errorsperImage={errors.image1}/>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                          <Images id='image2' register={register} image='image2' errors={errors} 
                          buttonId='uploadbtn2' imageLength={image2Length} changeState={changeState}
                          imageNumber={2} errorsperImage={errors.image2}/>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                          <Images id='image3' register={register} image='image3' errors={errors} 
                          buttonId='uploadbtn3' imageLength={image3Length} changeState={changeState} 
                          imageNumber={3} errorsperImage={errors.image3}/>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                          <Images id='image4' register={register} image='image4' errors={errors} 
                          buttonId='uploadbtn4' imageLength={image4Length} changeState={changeState} 
                          imageNumber={4} errorsperImage={errors.image4}/>
                        </Grid>
                      </Grid>
                     )} 
                    {
                     step == 5 && (
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



    // const res = await fetch('http://localhost:5000/product/istest', {
    //     method: "POST",
    //     body: formData,
    // }).then((res) => res.json());



    {/* <Grid item xs={12} sm={12}> 
                          <TextField
                            fullWidth
                            sx={{display:'none'}}
                            id='image1'
                            type='file'
                            
                            {...register('image1',{
                              required : 'Images Required',
                              validate:{
                                acceptedFormatsf: (file:any) => formats.includes(file[0]?.type) ||
                                 "Each image type must be Only PNG, JPEG, JPG",
                              },
                              onChange : (e) =>{setImage1(e.target.files[0])}
                            })} 
                            error={!!errors.image1}
                            helperText={errors.image1?.message}
                          />
  
                         <Button sx={{height:'100%',color:'black'}} type='button' 
                            id='uploadbtn1' onClick={()=>toggleUpload('image1')}>
                            {
                               image1Length > 0 && !errors.image1?.message?
                               <CheckIcon sx={{marginRight:'4px', color:'green'}}/>:
                               <AddIcon sx={{marginRight:'4px'}}/>
                            } 
                            Upload Image 1
                          </Button> 
                          {
                           errors.image1?.message?
                            <ErrorMessages error={ errors.image1?.message}/> :
                            <div hidden></div>
                          }
                       </Grid> */}



                       
                    //    <Grid item xs={12} sm={12}> 
                    //    <TextField
                    //      fullWidth
                    //      sx={{display:'none'}}
                    //      id='image2'
                    //      type='file'
                         
                    //      {...register('image2',{
                    //        required : 'Images Required',
                    //        validate:{
                    //          acceptedFormatsf: (file:any) => formats.includes(file[0]?.type) ||
                    //           "Each image type must be Only PNG, JPEG, JPG",
                    //        },
                    //        onChange : (e) =>{setImage2(e.target.files[0])}
                    //      })} 
                    //      error={!!errors.image2}
                    //      helperText={errors.image2?.message}
                    //    />

                    //   <Button sx={{height:'100%',color:'black'}} type='button' 
                    //      id='uploadbtn2' onClick={()=>toggleUpload('image2')}>
                    //      {
                    //         image2Length > 0 && !errors.image2?.message?
                    //         <CheckIcon sx={{marginRight:'4px', color:'green'}}/>:
                    //         <AddIcon sx={{marginRight:'4px'}}/>
                    //      } 
                    //      Upload Image 2
                    //    </Button> 
                    //    {
                    //     errors.image2?.message?
                    //      <ErrorMessages error={ errors.image2?.message}/> :
                    //      <div hidden></div>
                    //    }
                    // </Grid>


                    // <Grid item xs={12} sm={12}> 
                    //    <TextField
                    //      fullWidth
                    //      sx={{display:'none'}}
                    //      id='image3'
                    //      type='file'
                         
                    //      {...register('image3',{
                    //        required : 'Images Required',
                    //        validate:{
                    //          acceptedFormatsf: (file:any) => formats.includes(file[0]?.type) ||
                    //           "Each image type must be Only PNG, JPEG, JPG",
                    //        },
                    //        onChange : (e) =>{setImage3(e.target.files[0])}
                    //      })} 
                    //      error={!!errors.image3}
                    //      helperText={errors.image3?.message}
                    //    />

                    //   <Button sx={{height:'100%',color:'black'}} type='button' 
                    //      id='uploadbtn3' onClick={()=>toggleUpload('image3')}>
                    //      {
                    //         image3Length > 0 && !errors.image3?.message?
                    //         <CheckIcon sx={{marginRight:'4px', color:'green'}}/>:
                    //         <AddIcon sx={{marginRight:'4px'}}/>
                    //      } 
                    //      Upload Image 3
                    //    </Button> 
                    //    {
                    //     errors.image3?.message?
                    //      <ErrorMessages error={ errors.image3?.message}/> :
                    //      <div hidden></div>
                    //    }
                    // </Grid>


                    // <Grid item xs={12} sm={12}> 
                    //    <TextField
                    //      fullWidth
                    //      sx={{display:'none'}}
                    //      id='image4'
                    //      type='file'
                         
                    //      {...register('image4',{
                    //        required : 'Images Required',
                    //        validate:{
                    //          acceptedFormatsf: (file:any) => formats.includes(file[0]?.type) ||
                    //           "Each image type must be Only PNG, JPEG, JPG",
                    //        },
                    //        onChange : (e) =>{setImage4(e.target.files[0])}
                    //      })} 
                    //      error={!!errors.image4}
                    //      helperText={errors.image4?.message}
                    //    />

                    //   <Button sx={{height:'100%',color:'black'}} type='button' 
                    //      id='uploadbtn4' onClick={()=>toggleUpload('image4')}>
                    //      {
                    //         image4Length > 0 && !errors.image4?.message?
                    //         <CheckIcon sx={{marginRight:'4px', color:'green'}}/>:
                    //         <AddIcon sx={{marginRight:'4px'}}/>
                    //      } 
                    //      Upload Image 4
                    //    </Button> 
                    //    {
                    //     errors.image4?.message?
                    //      <ErrorMessages error={ errors.image4?.message}/> :
                    //      <div hidden></div>
                    //    }
                    // </Grid>