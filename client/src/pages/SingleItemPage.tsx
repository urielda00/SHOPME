import { useParams } from "react-router-dom";


const SingleItemPage = () => {
  const {productId} = useParams();
  
 return (
  <div>
  
  {productId}
  </div>
 );
}

export default SingleItemPage;