import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import {FormGroup,FormControlLabel,
        Checkbox ,AccordionSummary,
        Accordion, AccordionDetails,
        Box, Button } from '@mui/material';

// Internal import:
import { categoryList } from './data/ProductsListPageData';

// Icons import:
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

// Style import:
import {buttonMStyle,buttonStyle,containerLStyle,containerMStyle,containerSStyle} from '../../styles/ProductsListPage/TopCategories'

const TopCategories = () => {

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const handleNavigate = (passedCategory:string)=>{navigate(`/productsList?toCategory=${passedCategory}`)}
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>

         {/* Large screen: */}
         <Box sx={containerLStyle}>
             <Button sx={buttonStyle} onClick={()=>{navigate(`/productsList?toCategory`)}}>
               <Box sx={{marginRight:'5px'}}>{'See All'}</Box>{<AllInclusiveIcon/>}
             </Button>
             {
              categoryList.slice(1).map((item:any,index:any)=>{
                return(
                    <Button  sx={buttonStyle} key={index} onClick={()=>handleNavigate(item.category)}>   
                      <Box sx={{marginRight:'5px'}}>{item.name}</Box>{item.icon}
                    </Button>             
                )})
             }
         </Box>

         {/* Medium screen: */}
         <Box sx={containerMStyle}>
             <Button sx={buttonMStyle} onClick={()=>{navigate(`/productsList?toCategory`)}}>
                <Box sx={{marginRight:'5px'}}>{'See All'}</Box>{<AllInclusiveIcon/>}
             </Button>
            {
             categoryList.slice(1).map((item:any,index:any)=>{
               return(
                   <Button size='small' sx={buttonMStyle} key={index} 
                    onClick={()=>handleNavigate(item.category)}> 
                     <Box sx={{marginRight:'5px'}}>{item.name}</Box>{item.icon}
                   </Button>             
               )})
            }
         </Box>
  
         {/* Small screen: */}
         <Box sx={containerSStyle}>
           <Accordion sx={{position:'absolute',zIndex:'40',top:'108px'}} 
            expanded={expanded === 'panel1'} onChange={handleChange('panel1')} >
             <AccordionSummary expandIcon={<ExpandMoreIcon />}>
               <h4>Categories:
                 <span style={{fontSize:'12px',fontWeight:'lighter', marginLeft:'5px'}}>
                   (choose 1)
                 </span>
               </h4>
             </AccordionSummary>
             <AccordionDetails>
               <FormGroup>
                  <Button sx={buttonStyle} 
                   onClick={()=>{navigate(`/productsList?toCategory`);setExpanded('false')}}>
                     <Box sx={{marginRight:'5px'}}>
                      'See All'
                     </Box>
                     {<AllInclusiveIcon/>}
                  </Button>
                   {
                    categoryList.slice(1).map((category:any,index)=>{
                      return(
                        <FormControlLabel key={index} control={<Checkbox/>} label={category.name} 
                         checked={searchParams.get('toCategory') === `${category.category}`} 
                         onClick={()=>{handleNavigate(category.category);setExpanded('false')}}
                         />
                      )})
                   }
                </FormGroup>
              </AccordionDetails>
           </Accordion>
         </Box>
    </Box>
  )
};
export default TopCategories;