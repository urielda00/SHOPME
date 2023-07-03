//this is the logic component!
import { useEffect,useState } from 'react';
import { UseInfiniteData } from "../services/ProuductList/UseInfiniteData";
import { Box, Button } from '@mui/material';
import Loading from '../widgets/InfiniteJune/Loading';
import { categoryList } from './InfiniteJuneData';
import InfiniteDisplay from './InfiniteDisplay';
import { useSearchParams } from 'react-router-dom'

//The component:
const InfiniteJune = (some:any) => {
  const [searchParams] = useSearchParams();

  //set the category state, then pass it to change the query unique key to refresh the query:
  const [category,setCategory] = useState<boolean|string>(false);


  const toCategory = searchParams.get('toCategory')
  console.log(toCategory);

   
  
  //  //Import the data result from the infinityQuery,with the category as an argument:
  //  const {data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage , isLoading}
  //  = UseInfiniteData(toCategory);
  
    const {data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage , isLoading}
   = UseInfiniteData(category||toCategory);
  
  

  

  //mount the component everytime that the hasNextPage is checked:
   useEffect(() => {

       //fetching the next page onScroll:
       let fetching :boolean = false;
       const testscroll = document.getElementById('testscroll');
       const handleScroll = async (e:any) => {
         const {scrollHeight, scrollTop, clientHeight} = e.target.scrollingElement;
           if(!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
              fetching = true
              if(hasNextPage) await fetchNextPage()
              fetching = false
              }
          // const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
          // if(bottom){
          //   fetching = true
          //   if(hasNextPage) await fetchNextPage()
          //   fetching = false
          // }
       };
      //  testscroll?.addEventListener('scroll', handleScroll)
       document.addEventListener('scroll', handleScroll)
       return () => {
        // testscroll?.removeEventListener('scroll', handleScroll)
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
                  justifyContent:'center',backgroundColor:'#FFEADD'}}>
         {
          categoryList.map((item:any,index:any)=>{
            return(
              <Box sx={{marginLeft:'15px',marginRight:'15px'}} key={index}>
                <Button  onClick={()=>{
                  const itemCategory = item.category;
                  setCategory(itemCategory)
                  }} sx={{color:'black',":hover":{fontSize:'15px'}}}>
                   <Box sx={{marginRight:'5px'}}>{item.name}</Box>{item.icon}
                </Button>
              </Box>
            )
          })
         }
       </Box>
       {isSuccess && <InfiniteDisplay items={items} data={data} /> }
       {isFetchingNextPage && hasNextPage ? <div style={{width:'100%', height:'30px', textAlign:'center'}}>'Loading...'</div> : <div style={{width:'100%', height:'30px', textAlign:'center'}}>'No search left'</div>}
     </div>
  )
}

export default InfiniteJune;



  
