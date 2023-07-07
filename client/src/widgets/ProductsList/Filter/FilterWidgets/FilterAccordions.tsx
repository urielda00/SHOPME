import * as React from 'react';
import { categoryList, yearsList } from '../../data/ProductsListPageData';
import { FormGroup,FormControlLabel,
  Checkbox ,AccordionSummary,
  Accordion, AccordionDetails,
  Button } from '@mui/material';


// Icons & Hooks Imports:
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

//Components import:
import FilterBrands from './FilterBrands';
import FilterOs from './FilterOs';

export const Accordions = ()=>{

  // State variables:
  const [expanded, setExpanded] = React.useState<string | false>(false);
  

  // Hooks & url variables:
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentUrl=window.location.href;

  // URL Query variables:
  const isCategory = searchParams.get('toCategory');
  const isBrand = searchParams.get('brand');
  const isos = searchParams.get('os');

  // Functions variables:
  function hasQueryParams(url:string,brand:any,os:any,year:any){

    if(year){
      return url.includes('&os')
    }else if(os){
      return url.includes('&brand')
     }else if(brand){
      return url.includes('?') 
     }
    };

  const handleAddFilter = (passedCategory:any,brand?:any,os?:any,year?:any) =>{
    if(year){
      navigate(`/productsList?toCategory=${passedCategory}&brand=${brand}&os=${os}&year=${year}`)
    }else if(os){
      navigate(`/productsList?toCategory=${passedCategory}&brand=${brand}&os=${os}`)
    }else if(brand){
      navigate(`/productsList?toCategory=${passedCategory}&brand=${brand}`)
    }else{
      navigate(`/productsList?toCategory=${passedCategory}`)
    }
  };

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
  };


  // JSX:
  return (
    <>
    {/* Filter By Category */}
    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <h4>Categories:
          <span style={{fontSize:'12px',fontWeight:'lighter', marginLeft:'5px'}}>
            (choose 1)
          </span>
        </h4>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
         {
           categoryList.slice(1).map((category:any)=>{
           return(
           <FormControlLabel control={<Checkbox/>} label={category.name} 
            checked={searchParams.get('toCategory') === `${category.category}`} 
            onClick={()=>handleAddFilter(category.category)} />
            )
           })
         }
       </FormGroup>
     </AccordionDetails>
    </Accordion>

    
    {/*Filter By Brands */}
    <Accordion sx={{marginTop:'15px'}} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <h4>Brands:</h4>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          {
            hasQueryParams(currentUrl,true,false,false) ? <FilterBrands brand={isCategory}/> :
            <div>choose category first</div>
          }
        </FormGroup>
      </AccordionDetails>
    </Accordion>


    {/* Filter By OS */}
    <Accordion sx={{marginTop:'15px'}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
      <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
        <h4>OS:</h4>
      </AccordionSummary>
      <AccordionDetails>
       <FormGroup>
         {
           hasQueryParams(currentUrl,false,true,false) ? <FilterOs brand={isCategory}/>
           : <div>choose Brand first</div>

         }
      </FormGroup>
     </AccordionDetails>
    </Accordion>





    {/* Filter By Year */}
    <Accordion sx={{marginTop:'15px'}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
       <h4>Year:</h4>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
         {
          hasQueryParams(currentUrl,false,false,true) ?yearsList.map((year)=>{
           return(
             <FormControlLabel
              control={<Checkbox/>} label={year.year} 
              checked={searchParams.get('year') === `${year.year}`}
             onClick={()=>handleAddFilter(isCategory,isBrand,isos,year.year)} />
           )
          }):
          <div>choose OS first</div>
         }
        </FormGroup>
      </AccordionDetails>
    </Accordion>

    <div style={{display:'flex', justifyContent:'center',width:'100%',marginTop:'20px'}}>
      <Button sx={{backgroundColor:'#FFA41B',color:'black',":hover":{backgroundColor:'#F86F03'}}}
        href='/productsList' variant='contained'>
          Clear Filters
      </Button>
    </div>
    </>
  )
};