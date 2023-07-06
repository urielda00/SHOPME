import { useInfiniteQuery } from "react-query";

//this is done.

const LIMIT = 2; //The limit items per page
const fetchItems = async (page:any,category:any,year:any=false,os:any=false,brand:any=false) => {
  
  if(category && brand && os && year){
    const response = 
    await 
    fetch(`http://localhost:5000/product/readProducts?per_page=${LIMIT}&page=${page}&category=${category}&year=${year}&os=${os}&brand=${brand}`);
    return response.json()
  }else if(category && brand && os){
    const response = 
    await 
    fetch(`http://localhost:5000/product/readProducts?per_page=${LIMIT}&page=${page}&category=${category}&os=${os}&brand=${brand}`);
    return response.json()
  }else if(category && brand){
    const response = 
    await 
    fetch(`http://localhost:5000/product/readProducts?per_page=${LIMIT}&page=${page}&category=${category}&brand=${brand}`);
    return response.json()
  }else if(category){
    const response = 
    await 
    fetch(`http://localhost:5000/product/readProducts?per_page=${LIMIT}&page=${page}&category=${category}`);
    return response.json()
  }else{
   const response = 
   await fetch(`http://localhost:5000/product/readProducts?per_page=${LIMIT}&page=${page}`)
   return response.json()  
  }
  
};



export const UseInfiniteData = (category:any,year:any=false,os:any=false,brand:any=false) => {
  return useInfiniteQuery(
   ['items',`category: ${category}`,`year: ${year}`,`os:${os}`,`brand:${brand}`], 
    ({pageParam = 1}) => fetchItems(pageParam, category, year, os, brand),
    {
      getNextPageParam: (lastPage, allPages) => {
           const nextPage = allPages.length + 1
           return lastPage.length !== 0 ? nextPage : undefined
      },
      staleTime:1000 * 60 * 2, //2 minutes of no background-refetching
      refetchInterval: 1000 * 60 * 2, //every 2 minutes, will be refetching
      refetchIntervalInBackground: true, //make the above line to work even if the window not on focus.
      refetchOnWindowFocus:false, //Make the re-fetching on every time wwe back to browser- off.
    }
  )
}
