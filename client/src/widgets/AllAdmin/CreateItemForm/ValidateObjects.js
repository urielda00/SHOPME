import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { InputAdornment } from '@mui/material';

const formats = ["image/jpeg", "image/png", "image/jpg"];

export const validateImagesObj = 
  {
    required : 'Images Required',
    validate:{
  //   fourFiles: (files) => files.length === 4 || "Must Upload 4 images. no more - no less",
  //   firstlessThan3MB: (files) => files[0]?.size < 1024*1024*5 || " Each image size must be Max 5MB",
  //   secondlessThan3MB: (files) => files[1]?.size < 1024*1024*5 || "Each image size must be Max 5MB",
  //   thirdlessThan3MB: (files) => files[2]?.size < 1024*1024*5 || "Each image size must be Max 5MB",
  //   fourthlessThan3MB: (files) => files[3]?.size < 1024*1024*5 || "Each image size must be Max 5MB",
    acceptedFormatsf: (file) => formats.includes(file[0]?.type) || "Each image type must be Only PNG, JPEG, JPG", 
    // onChange : (e) =>{setImage1(e.target.files[0])},
  //   acceptedFormatss: (files) => formats.includes(files[1]?.type) || "Each image type must be Only PNG, JPEG, JPG",
  //   acceptedFormatst: (files) => formats.includes(files[2]?.type) || "Each image type must be Only PNG, JPEG, JPG",
  //   acceptedFormatsfo: (files) => formats.includes(files[3]?.type) || "Each image type must be Only PNG, JPEG, JPG",
  }
  };

  export const validateShortObj ={
    required : 'Short Description Is Required',
    minLength :{
      value : 4,
      message:'Minimum Length is 4'
    },
    maxLength:{
      value : 50,
      message:'Max Length is 50'
    }
   };

   export const validateProductNameObj = {
    required : 'Product Name Is Required',
    minLength :{
      value : 2,
      message:'Minimum Length is 2'
    },
    maxLength:{
      value : 20,
      message:'Max Length is 20'
    }                   
  };

  export const validateLongObj = {
    required : 'Long Description Is Required',
    minLength :{
      value : 4,
      message:'Minimum Length is 4'
    },
    maxLength:{
      value : 150,
      message:'Max Length is 150'
    }
   };


   export const companyObj = {
    required : 'Company Is Required',
    minLength :{
      value : 2,
      message:'Minimum Length is 2'
    },
    maxLength:{
      value : 20,
      message:'Max Length is 20'
    }
   };


   export const brandObj = {
    required : 'Brand Is Required',
    minLength :{
      value : 2,
      message:'Minimum Length is 2'
    },
    maxLength:{
      value : 10,
      message:'Max Length is 10'
    }
   };

   export const categoryObj = {
    required : 'Category Is Required',
    minLength :{
      value : 2,
      message:'Minimum Length is 2'
    },
    maxLength:{
      value : 10,
      message:'Max Length is 10'
    }
   };

   export const osObj = {
    required : 'Operation System Is Required',
    minLength :{
      value : 2,
      message:'Minimum Length is 2'
    },
    maxLength:{
      value : 10,
      message:'Max Length is 10'
    }
   };

   export const priceInputProps ={
    endAdornment: (
      <InputAdornment position="end">
        <AttachMoneyIcon/>
      </InputAdornment>
    )}

    export const required = {
      required : 'Required',
      valueAsNumber: true,
     };