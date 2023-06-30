import { useEffect } from 'react';
import { UseInfiniteData } from "../services/ProuductList/UseInfiniteData";

//later- to fix the types in this file!

export const InfiniteJune = () => {

  const {data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage} = UseInfiniteData();
  useEffect(() => {
    let fetching = false;
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
  }, [fetchNextPage, hasNextPage])
  
  
  const items = (data:any)=>{
     const updated =data.pages.length-1
     return data.pages[updated] 
    };
    // need to create loading cool animation.
    
  return (
     <div>
       {isSuccess && items(data)?.map((item:any)=>{
        return(
           <div key={item._id} style={{height:'400px'}}>
             <img src={`http://localhost:5000/product/readProducts/${item.image}`} width={'90px'} height={'40px'} />
             <h2>{item.productName}</h2>
           </div>
    )
  })
   }
    {isFetchingNextPage && hasNextPage ? 'Loading...' : 'No search left'}
</div>
  )
}




  
