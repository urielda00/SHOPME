import React,{useState} from 'react'
import axios from 'axios'
import { Box } from '@mui/material';
// shortDescription, longDescription, price,quantity, category, productName,company
import CreateForm from '../widgets/AllAdmin/CreateItemForm/CreateForm';
export const CreateItem = () => {

  const [shortDescription, setShortDescription]= useState('');
  const [longDescription,setLongDescription]= useState('');
  const [price, setPrice]= useState<any>();
  const [quantity, setQuantity]= useState<any>();
  const [category, setCategory]= useState<any>();
  const [productName, setProductName]= useState<any>();
  const [company, setCompany]= useState<any>();
  const [releaseYear, setReleaseYear]= useState<any>();
  const [os, setOs]= useState<any>();
  const [brand, setBrand]= useState<any>();

  const handleSubmit= async (e:any)=>{
    e.preventDefault();
    try {
      const res= await axios.post('http://localhost:5000/product/createProduct',
      {
      shortDescription,
      longDescription,
      price,
      quantity,
      category,
      productName,
      company,
      releaseYear,
      os,
      brand
      });
      console.log('ITS GOOD');
    } catch (error) {
      console.log('ITS BAD');
    }
    }


  return (
    <Box sx={backgroundStyle}>
        <Box sx={{display:{xs:'flex',sm:'flex', md: 'flex'}}}>
          <CreateForm/>
        </Box>
    </Box>
    // <form encType='multipart/form-data' action='http://localhost:5000/product/createProduct' method='post'>
    //   <input onChange={(e)=>setShortDescription(e.target.value)} name='shortDescription' type="text" placeholder="shortDescription"/>

    //   <input onChange={(e)=>setLongDescription(e.target.value)} name='longDescription' type="text" placeholder="longDescription"/>

    //   <input onChange={(e)=>setPrice(e.target.value)} name='price' type="number" placeholder="price"/>

    //   <input onChange={(e)=>setQuantity(e.target.value)} name='quantity' type="number" placeholder="quantity"/>

    //   <input onChange={(e)=>setCategory(e.target.value)} name='category' type="text" placeholder="category"/>

    //   <input onChange={(e)=>setProductName(e.target.value)} name='productName' type="text" placeholder="productName"/>

    //   <input onChange={(e)=>setCompany(e.target.value)} name='company' type="text" placeholder="company"/>

    //   <input onChange={(e)=>setReleaseYear(e.target.value)} name='releaseYear' type="number" placeholder="releaseYear"/>

    //   <input onChange={(e)=>setOs(e.target.value)} name='os' type="text" placeholder="os"/>

    //   <input onChange={(e)=>setBrand(e.target.value)} name='brand' type="text" placeholder="brand"/>
       
    //   <input name='productImages' type='file' multiple/>
      
    //   <button>send </button>
    // </form>
  )
};

const backgroundStyle = {
  width:'100%',
  height:{md:'88vh',sm:'88vh',xs:'90vh'},
  backgroundColor:'#ECE8DD',
  display:'flex',
  alignItems:'center',
  justifyContent:'center'
};
