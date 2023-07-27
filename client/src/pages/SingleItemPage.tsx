import { useParams } from "react-router-dom";
import { UseSingleItemData } from "../services/SingleItemPage/UseSingleItemData";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import SingleItemContainer from "../widgets/SingleItemPage/SingleItemContainer";
import RelateItems from "../widgets/SingleItemPage/RelateItems";

const SingleItemPage = () => {
  const {productId} = useParams();
  const {isLoading ,data} = UseSingleItemData(productId)
  const [imgSrc, setImgSrc] = useState<any>();
  const handleState = (img:string) => {setImgSrc(img)};
    
  useEffect(()=>{
    data && setImgSrc(data.productImages[1]) 
  },[data])

  if(isLoading){return <h1>Loading...</h1>}

  return(
     <Box>
      <SingleItemContainer imgSrc={imgSrc} data={data} handleState={handleState}/>
      <RelateItems handleState={handleState}/>
    </Box>  
     
 );
};

export default SingleItemPage;   