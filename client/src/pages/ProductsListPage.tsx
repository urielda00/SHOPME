import { useEffect } from 'react';
import { Box } from '@mui/material';

// Hooks imports:
import { UseInfiniteData } from "../services/ProuductList/UseInfiniteData";
import { useSearchParams } from 'react-router-dom';

// Internal imports:
import Loading from '../widgets/ProductsList/Loading';
import ProductsListDisplay from '../widgets/ProductsList/ProductsListDisplay';
import TopCategories from '../widgets/ProductsList/TopCategories';



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


   //The actual data to display- filtered by the laast 2 items to display.
    const items = (data:any)=>{
     const updated =data.pages.length-1
     return data.pages[updated] 
    };

    //While loading the data:
    if(isLoading){
      return <Loading/>
    };
      
   return (
     <Box>
       <TopCategories/>
       {isSuccess && <ProductsListDisplay items={items} data={data} /> }
     </Box>
  )
};
export default ProductsListPage;
