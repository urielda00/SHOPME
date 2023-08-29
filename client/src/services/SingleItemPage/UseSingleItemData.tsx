import { useQuery } from "react-query";
import axios from "axios";


const fetchItem = (itemId:string|undefined) => {
return  axios.get(`http://localhost:5000/product/readSingleProduct/${itemId}`);
}

export const UseSingleItemData = (itemId:string|undefined) => {
  return useQuery(['singleItemPage',itemId], ()=>fetchItem(itemId), 
  {
    refetchInterval: 1000 * 60 * 2,
    refetchIntervalInBackground: true,
    refetchOnWindowFocus:false,
    staleTime:1000 * 60 * 2,
    select: (data) => {return data.data}
  }
  )
};