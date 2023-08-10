import { useParams } from "react-router-dom";
import { UseSingleItemData } from "../services/SingleItemPage/UseSingleItemData";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import SingleItemContainer from "../widgets/SingleItemPage/SingleItemContainer";
import RelateItems from "../widgets/SingleItemPage/RelateItems";

// The component:
const SingleItemPage:React.FunctionComponent = () => {
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
      {/* Large Screens: */}
      <Box sx={{display:{xs:'none',sm:'none', md: 'block'}}}>
         <SingleItemContainer imgSrc={imgSrc} data={data} handleState={handleState}/>
         <RelateItems handleState={handleState}/>
      </Box>

      {/* Medium & Small Screens: */}
      <Box sx={{display:{xs:'flex',sm:'flex', md: 'none'},height:'78vh',width:'100%'}}>
        The style for medium & small screens not ready yet.
      </Box>
    </Box>  
 );
};

export default SingleItemPage;   