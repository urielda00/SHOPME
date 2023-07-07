import {Checkbox,FormControlLabel } from '@mui/material';
import { osCaseList } from '../../data/ProductsListPageData';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const FilterOs = ({brand}:any) => {
  

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();


    // URL Query variables:
    const isCategory = searchParams.get('toCategory');
    const isOs = searchParams.get('os');
    const isBrand = searchParams.get('brand');
  
    const handleAddFilter = (passedCategory:any,brand:any,os:any) =>{
        navigate(`/productsList?toCategory=${passedCategory}&brand=${brand}&os=${os}`)
    };

  // const handleAddFilter = (isCategory:any,isBrand?:any) =>{
  //   navigate(`/productsList?toCategory=${isCategory}&brand=${isBrand}`)
  // };

  const handleTest = (brand:any)=>{
    switch (brand) {
    case 'phone':
      return <div style={{display:'grid'}}>
        {
        osCaseList.phones.map((index:any)=>{
        return(<FormControlLabel  control={<Checkbox/>} label={index} checked={searchParams.get('os') === `${index}`} onClick={()=>handleAddFilter(isCategory,isBrand,index)}/>)
        })
        }
      </div>
    case 'watches':
      return <div style={{display:'grid'}}>
      {
      osCaseList.phones.map((index:any)=>{
      return(<FormControlLabel control={<Checkbox/>} label={index} checked={searchParams.get('os') === `${index}`} onClick={()=>handleAddFilter(isCategory,isBrand,index)}/>)
      })
      }
    </div>
    case 'tablets':
      return <div style={{display:'grid'}}>
      {
      osCaseList.phones.map((index:any)=>{
      return(<FormControlLabel control={<Checkbox/>} label={index} checked={searchParams.get('os') === `${index}`} onClick={()=>handleAddFilter(isCategory,isBrand,index)}/>)
      })
      }
    </div>
    case 'laptops':
      return <div style={{display:'grid'}}>
      {
      osCaseList.laptops.map((index:any)=>{
      return(<FormControlLabel control={<Checkbox/>} label={index} checked={searchParams.get('os') === `${index}`} onClick={()=>handleAddFilter(isCategory,isBrand,index)}/>)
      })
      }
    </div>
    case 'pc':
      return <div style={{display:'grid'}}>
      {
      osCaseList.laptops.map((index:any)=>{
      return(<FormControlLabel control={<Checkbox/>} label={index} checked={searchParams.get('os') === `${index}`} onClick={()=>handleAddFilter(isCategory,isBrand,index)}/>)
      })
      }
    </div>
  }
  };
  return (
    <div>
    {
      handleTest(brand)
    }
    </div>
  )
}
export default FilterOs;