import axios from "axios";
import {useQuery} from 'react-query';

const fetchItems = (pageNumber = 1) => {
  return axios.get(`http://localhost:5000/product/readProducts?page=${pageNumber}`)
};


export const useGetProductsData = (pageNumber : any) => {
  return useQuery(['fetch-items', pageNumber],() => fetchItems,{
    staleTime : 60000,
    refetchOnWindowFocus:false,
    refetchInterval: 1000 * 60 * 10, //every 10 minutes.
    refetchIntervalInBackground: true,
    // getNextPageParam:(_lastPage, pages) => {
    //   if (pages.length < 3) {
    //     return pages.length + 1
    //   } else {
    //     return <h1>No more pages!</h1>
    //   }
    // }
  })
};
