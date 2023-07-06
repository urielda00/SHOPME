//this is the logic component!
import { useEffect } from 'react';
import { UseInfiniteData } from "../services/ProuductList/UseInfiniteData";
import { Box, Button } from '@mui/material';
import Loading from '../widgets/ProductsList/Loading';
import { categoryList } from '../widgets/ProductsList/data/ProductsListPageData';
import ProductsListDisplay from '../widgets/ProductsList/ProductsListDisplay';
import { useSearchParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';


//The component:
const ProductsListPage = () => {
  const [searchParams] = useSearchParams();

  //set the category state, then pass it to change the query unique key to refresh the query:


  const toCategory = searchParams.get('toCategory');
  const year = searchParams.get('year');
  const os = searchParams.get('os');
  const brand = searchParams.get('brand');
    const {data, isSuccess, hasNextPage, fetchNextPage , isLoading}
   = UseInfiniteData(toCategory,year,os,brand);
  
  

  //mount the component everytime that the hasNextPage is checked:
   useEffect(() => {

       //fetching the next page onScroll:
       let fetching :boolean = false;
      //  const testscroll = document.getElementById('testscroll');
      
       const handleScroll = async (e:any) => {
         const {scrollHeight, scrollTop, clientHeight} = e.target.scrollingElement;
           if(!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
              fetching = true
              if(hasNextPage) await fetchNextPage()
              fetching = false
              }
       };
       document.addEventListener('scroll', handleScroll)
       return () => {
         document.removeEventListener('scroll', handleScroll)
       } 
      }, [fetchNextPage, hasNextPage]);


   //the actual data to display- filtered by the laast 2 items to display.
    const items = (data:any)=>{
     const updated =data.pages.length-1
     return data.pages[updated] 
    };


    //display the loading animation from react mui if isLoading:
    if(isLoading){
      return <Loading/>
    };
    
    
   return (
     <div>
      <Box sx={{ width:'100%', height:'90px',display:'flex',alignItems:'center',
                  justifyContent:'center',backgroundColor:'#ECE8DD',boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.1) inset',marginBottom:'2px'}}>
                  <Link to='/productsList'>
                    <Button sx={{color:'black',":hover":{color:'grey'}}}>
                       <Box sx={{marginRight:'5px'}}>{'See All'}</Box>{<AllInclusiveIcon/>}
                    </Button>
                  </Link>
         {
          categoryList.slice(1).map((item:any,index:any)=>{
            return(
              <Link to={`/productsList?toCategory=${item.category}`}>
              <Button sx={{marginLeft:'15px',marginRight:'15px'}} key={index}>   
                <Button  onClick={()=>{                  
                  }}  sx={{color:'black',":hover":{color:'grey'}}}>
                   <Box sx={{marginRight:'5px'}}>{item.name}</Box>{item.icon}
                </Button>
              </Button>
              </Link>
            )
          })
         }
       </Box>
       {isSuccess && <ProductsListDisplay items={items} data={data} /> }
     </div>
  )
}

export default ProductsListPage;