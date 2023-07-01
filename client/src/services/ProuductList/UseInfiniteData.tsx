import { useInfiniteQuery } from "react-query";

const LIMIT = 2; //The limit items per page
const fetchItems = async (page:any) => {
  const response = 
  await fetch(`http://localhost:5000/product/readProducts?per_page=${LIMIT}&page=${page}`)
  return response.json()
};

export const UseInfiniteData = () => {
 
  return useInfiniteQuery(
    'items', 
    ({pageParam = 1}) => fetchItems(pageParam),
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
