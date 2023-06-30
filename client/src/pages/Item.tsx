import { useParams } from "react-router-dom";


const Item = () => {
  const {userId} = useParams();
  
 return (
  <div>
  
  {userId}
  </div>
 );
}

export default Item;