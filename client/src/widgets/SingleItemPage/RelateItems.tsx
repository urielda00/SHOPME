import { Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { UseRelateItemsData } from "../../services/SingleItemPage/UseRelateItemsData";
import { Link, useSearchParams } from 'react-router-dom';
import Loading from "../ProductsList/Loading";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



 const RelateItems = ({handleState}:any) => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const {isLoading ,data, error, isError} = UseRelateItemsData(category)

  if(isLoading){
    return <Loading/>
  };

  
  return (
  <Box sx={{width:'100%',height:'400px',
   display:'flex', flexDirection:'column', justifyContent:'start',alignItems:'center'}}>
      <h1 style={{marginBottom:'30px'}}>Products related to this item:</h1>
      <div style={{width:'90%'}}>
        <Carousel responsive={responsive}>
          {
            data?.map((item:any)=>{
              return(
                  <Box key={item._id} sx={{height:'270px',width:'170px',textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center', padding:'5px',position:'relative'}}>
                    <Link to={`/product/${item._id}?category=${item.category}`} style={{textDecoration:'none',color:'black'}} 
                    onClick={()=>{handleState(item.productImages[1])}}>
                    <img alt="" style={{width:'160px', height:'150px',objectFit:'cover',borderRadius:'10px'}} 
                    src={`https://deployment-shopme.onrender.com/product/readProducts/${item.image}`}/>
                    </Link>
                    <p style={{marginTop:'10px'}}>{item.shortDescription}</p>
                    <p style={{marginTop:'20px',position:'absolute', bottom:'10px'}}>{item.price} $</p>
                  </Box>  
              )
            })
          }
       </Carousel>
     </div>
    </Box>
  )
}
export default RelateItems;