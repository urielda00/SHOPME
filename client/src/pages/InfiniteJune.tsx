import { useEffect } from 'react';
import { UseInfiniteData } from "../services/ProuductList/UseInfiniteData";
import Loading from '../widgets/InfiniteJune/Loading';
import InfiniteDisplay from './InfiniteDisplay';
const InfiniteJune = () => {

  const {data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage , isLoading} = UseInfiniteData();
  useEffect(() => {
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
  }, [fetchNextPage, hasNextPage])
  
  const items = (data:any)=>{
     const updated =data.pages.length-1
     return data.pages[updated] 
    };
    // need to create loading cool animation.
    if(isLoading){
      return <Loading/>
    }
   return (
     <div>
       {isSuccess && <InfiniteDisplay items={items} data={data}/> }
       {isFetchingNextPage && hasNextPage ? 'Loading...' : 'No search left'}
     </div>
  )
}

export default InfiniteJune;



  
