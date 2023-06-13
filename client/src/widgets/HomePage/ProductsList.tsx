import React, {ReactNode, useEffect,useState} from 'react'
import axios from 'axios';
import { Box, Grid,Button, IconButton } from '@mui/material';
import photo from '../../assets/pocoF5.png';
import logo from '../../assets/logo.png';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
const ProductsList = () => {
  // const [products,setProducts]= useState([]);
  // useEffect(()=>{
  //   axios.get('http://localhost:5000/product/readProducts')
  //  .then(res=>{
  //   setProducts(res.data);
  //  }).catch(err=>{console.log(err);})
  // },[])
  // console.log(products);

  return (
    // <div style={{width:'600px', height:'800px', backgroundColor:'red'}}>ProductsList</div>
    <>
    
    <div style={{height: '100vh',width:'100%'}}>
      {/* <ul>
        {products?.map((product:any)=>{
          return (
            <Grid style={{backgroundColor:'blue'}} spacing={2} margin={2} container>
            <li key={product._id} >
              <Grid item xs={8} sm={2} >
                <img src={`http://localhost:5000/product/readProducts/${product.image}`} width={'100px'} alt=''/>
                 <h2>{product.productName}</h2>
                 <h3>{product.price}</h3>
              </Grid>
            
             
            </li>
            </Grid>  
          )
        })}
      </ul> */}
      {/* <Grid container spacing={2}  style={{height:'500px',width:'80%', marginLeft:'50px', marginBottom:'200px',marginTop:'50px'}}>
         <Grid item xs={12} md={3} style={{backgroundColor:'red',height:'55vh'}}>
          <img src={back1} width={'300px'} />
          <h1>Short descriptions</h1>
          <h3>price: 400$</h3>
          <button style={{width:'150px', height:'50px'}}>View More</button>
         </Grid>
         <Grid item xs={12} md={3} style={{backgroundColor:'blue',height:'55vh'}}>2</Grid>
         <Grid item xs={12} md={3} style={{backgroundColor:'green',height:'55vh'}}>3</Grid>
         <Grid item xs={12} md={3} style={{backgroundColor:'black',height:'55vh'}}>4</Grid>
      </Grid> */}
      <div style={{display:'grid',justifyItems:'center',gridTemplateColumns:'repeat(auto-fit,minmax(23rem,1fr))',flex:'1',width:'100%',backgroundColor:'#F5EFE7', flexWrap:'wrap'}}>


        <div style={{width:'350px',height:'550px',textAlign:'center',borderRadius:'15px',backgroundColor:'#FFF',marginTop:'15px',marginBottom:'20px',boxShadow:' -2px 2px 2px 1px rgba(0, 0, 0, 0.2)'}}>
          <div style={{position:'relative'}}>
          <img src={photo} style={{width:'90%'}}/>
          {/* <LocalMallOutlinedIcon fontSize='large' style={{position:'absolute',left:'30px', top:'30px'}}/> */}
          </div>
          <img src={logo} style={{width:'12%'}}/>
          <h2 style={{fontFamily:'"Crimson Text", serif'}}>Xiaomi Redmi A1+</h2>
          <p>This is the brand new  Xiaomi Redmi A1+</p>
          <h3>1500$</h3>
          <div style={{display:'flex',position:'relative',justifyContent:'space-between',alignItems:'center',height:'20%'}}>

            <div style={{position:'absolute',left:'30px', top:'20px'}}>
              {/* Add To Cart<LocalMallOutlinedIcon/>*/}
              {/* <FavoriteIcon fontSize='large' sx={{ color: 'red', marginLeft:'10px',position:'absolute',left:'5px', bottom:'160px' }}/>  */}
              <Button variant="outlined"  sx={{color:'black'}}>Add To Cart</Button>
            </div>

            <div style={{position:'absolute',right:'30px', top:'20px'}}>
              <Button variant="outlined" sx={{color:'black'}}>Buy Now</Button>
            </div>

          </div>
        </div>
        
        <div style={{width:'350px',height:'550px',textAlign:'center',borderRadius:'15px',backgroundColor:'#FFF',marginTop:'15px',marginBottom:'20px'}}>
          <div style={{position:'relative'}}>
          <img src={photo} style={{width:'90%'}}/>
          {/* <LocalMallOutlinedIcon fontSize='large' style={{position:'absolute',left:'30px', top:'30px'}}/> */}
          </div>
          <img src={logo} style={{width:'12%'}}/>
          <h2 style={{fontFamily:'"Crimson Text", serif'}}>Xiaomi Redmi A1+</h2>
          <p>This is the brand new  Xiaomi Redmi A1+</p>
          <h3>1500$</h3>
          <div style={{display:'flex',position:'relative',justifyContent:'space-between',alignItems:'center',height:'20%'}}>

            <div style={{position:'absolute',left:'30px', top:'20px'}}>
              {/* Add To Cart<LocalMallOutlinedIcon/>*/}
              {/* <FavoriteIcon fontSize='large' sx={{ color: 'red', marginLeft:'10px',position:'absolute',left:'5px', bottom:'160px' }}/>  */}
              <Button variant="outlined"  sx={{color:'black'}}>Add To Cart</Button>
            </div>

            <div style={{position:'absolute',right:'30px', top:'20px'}}>
              <Button variant="outlined" sx={{color:'black'}}>Buy Now</Button>
            </div>

          </div>
        </div>


        <div style={{width:'350px',height:'550px',textAlign:'center',borderRadius:'15px',backgroundColor:'#FFF',marginTop:'15px',marginBottom:'20px'}}>
          <div style={{position:'relative'}}>
          <img src={photo} style={{width:'90%'}}/>
          {/* <LocalMallOutlinedIcon fontSize='large' style={{position:'absolute',left:'30px', top:'30px'}}/> */}
          </div>
          <img src={logo} style={{width:'12%'}}/>
          <h2 style={{fontFamily:'"Crimson Text", serif'}}>Xiaomi Redmi A1+</h2>
          <p>This is the brand new  Xiaomi Redmi A1+</p>
          <h3>1500$</h3>
          <div style={{display:'flex',position:'relative',justifyContent:'space-between',alignItems:'center',height:'20%'}}>

            <div style={{position:'absolute',left:'30px', top:'20px'}}>
              {/* Add To Cart<LocalMallOutlinedIcon/>*/}
              {/* <FavoriteIcon fontSize='large' sx={{ color: 'red', marginLeft:'10px',position:'absolute',left:'5px', bottom:'160px' }}/>  */}
              <Button variant="outlined"  sx={{color:'black'}}>Add To Cart</Button>
            </div>

            <div style={{position:'absolute',right:'30px', top:'20px'}}>
              <Button variant="outlined" sx={{color:'black'}}>Buy Now</Button>
            </div>

          </div>
        </div>


        <div style={{width:'350px',height:'550px',textAlign:'center',borderRadius:'15px',backgroundColor:'#FFF',marginTop:'15px',marginBottom:'20px'}}>
          <div style={{position:'relative'}}>
          <img src={photo} style={{width:'90%'}}/>
          {/* <LocalMallOutlinedIcon fontSize='large' style={{position:'absolute',left:'30px', top:'30px'}}/> */}
          </div>
          <img src={logo} style={{width:'12%'}}/>
          <h2 style={{fontFamily:'"Crimson Text", serif'}}>Xiaomi Redmi A1+</h2>
          <p>This is the brand new  Xiaomi Redmi A1+</p>
          <h3>1500$</h3>
          <div style={{display:'flex',position:'relative',justifyContent:'space-between',alignItems:'center',height:'20%'}}>

            <div style={{position:'absolute',left:'30px', top:'20px'}}>
              {/* Add To Cart<LocalMallOutlinedIcon/>*/}
              {/* <FavoriteIcon fontSize='large' sx={{ color: 'red', marginLeft:'10px',position:'absolute',left:'5px', bottom:'160px' }}/>  */}
              <Button variant="outlined"  sx={{color:'black'}}>Add To Cart</Button>
            </div>

            <div style={{position:'absolute',right:'30px', top:'20px'}}>
              <Button variant="outlined" sx={{color:'black'}}>Buy Now</Button>
            </div>

          </div>
        </div>


        <div style={{width:'350px',height:'550px',textAlign:'center',borderRadius:'15px',backgroundColor:'#FFF',marginTop:'15px',marginBottom:'20px'}}>
          <div style={{position:'relative'}}>
          <img src={photo} style={{width:'90%'}}/>
          {/* <LocalMallOutlinedIcon fontSize='large' style={{position:'absolute',left:'30px', top:'30px'}}/> */}
          </div>
          <img src={logo} style={{width:'12%'}}/>
          <h2 style={{fontFamily:'"Crimson Text", serif'}}>Xiaomi Redmi A1+</h2>
          <p>This is the brand new  Xiaomi Redmi A1+</p>
          <h3>1500$</h3>
          <div style={{display:'flex',position:'relative',justifyContent:'space-between',alignItems:'center',height:'20%'}}>

            <div style={{position:'absolute',left:'30px', top:'20px'}}>
              {/* Add To Cart<LocalMallOutlinedIcon/>*/}
              {/* <FavoriteIcon fontSize='large' sx={{ color: 'red', marginLeft:'10px',position:'absolute',left:'5px', bottom:'160px' }}/>  */}
              <Button variant="outlined"  sx={{color:'black'}}>Add To Cart</Button>
            </div>

            <div style={{position:'absolute',right:'30px', top:'20px'}}>
              <Button variant="outlined" sx={{color:'black'}}>Buy Now</Button>
            </div>

          </div>
        </div>


        <div style={{width:'350px',height:'550px',textAlign:'center',borderRadius:'15px',backgroundColor:'#FFF',marginTop:'15px',marginBottom:'20px'}}>
          <div style={{position:'relative'}}>
          <img src={photo} style={{width:'90%'}}/>
          {/* <LocalMallOutlinedIcon fontSize='large' style={{position:'absolute',left:'30px', top:'30px'}}/> */}
          </div>
          <img src={logo} style={{width:'12%'}}/>
          <h2 style={{fontFamily:'"Crimson Text", serif'}}>Xiaomi Redmi A1+</h2>
          <p>This is the brand new  Xiaomi Redmi A1+</p>
          <h3>1500$</h3>
          <div style={{display:'flex',position:'relative',justifyContent:'space-between',alignItems:'center',height:'20%'}}>

            <div style={{position:'absolute',left:'30px', top:'20px'}}>
              {/* Add To Cart<LocalMallOutlinedIcon/>*/}
              {/* <FavoriteIcon fontSize='large' sx={{ color: 'red', marginLeft:'10px',position:'absolute',left:'5px', bottom:'160px' }}/>  */}
              <Button variant="outlined"  sx={{color:'black'}}>Add To Cart</Button>
            </div>

            <div style={{position:'absolute',right:'30px', top:'20px'}}>
              <Button variant="outlined" sx={{color:'black'}}>Buy Now</Button>
            </div>

          </div>
        </div>



        {/* <div style={{width:'300px',height:'400px',backgroundColor:'#F2BE22',  marginTop:'15px'}}>3</div>
        <div style={{width:'300px',height:'400px',backgroundColor:'#E1AEFF',  marginTop:'15px'}}>2</div>
        <div style={{width:'300px',height:'400px',backgroundColor:'#2E8A99',  marginTop:'15px'}}>4</div>
        <div style={{width:'300px',height:'400px',backgroundColor:'#E4A5FF',  marginTop:'15px'}}>5</div>
        <div style={{width:'300px',height:'400px',backgroundColor:'#40128B',  marginTop:'15px'}}>6</div>
        <div style={{width:'300px',height:'400px',backgroundColor:'#884A39',  marginTop:'15px'}}>7</div>
        <div style={{width:'300px',height:'400px',backgroundColor:'#9BABB8',  marginTop:'15px'}}>8</div> */}
        
      </div>
      
    </div>
    </>
  )
}

export default ProductsList;
const containerStyle: React.CSSProperties={
  // marginBottom: '380px',
  // overflow: 'hidden',
  width: '100%',
  height: '100vh',
  // display: 'flex',
  // alignItems: 'center',
  // justifyContent:'space-between',
  float: 'none',
}

const listContainerStyle:React.CSSProperties={
  backgroundColor:'red',
  marginTop:'10px'
}
