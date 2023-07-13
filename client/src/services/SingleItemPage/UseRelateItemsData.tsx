import { useQuery } from "react-query";
import axios from "axios";


const fetchItem = (itemCategory:any) => {
return  axios.get(`http://localhost:5000/product/readRelateProducts?category=${itemCategory}`);
}

export const UseRelateItemsData = (itemCategory:any) => {
  return useQuery(['singleItemPage',itemCategory], ()=> fetchItem(itemCategory), 
  {
    refetchInterval: 1000 * 60 * 2,
    refetchIntervalInBackground: true,
    refetchOnWindowFocus:false,
    staleTime:1000 * 60 * 2,
    select: (data) => {return data.data}
  }
  )
};
