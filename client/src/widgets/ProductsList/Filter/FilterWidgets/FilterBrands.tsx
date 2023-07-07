import {Checkbox,FormControlLabel } from '@mui/material';
import { brandsList } from '../../data/ProductsListPageData';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const FilterBrands = ({brand}:any) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const isCategory = searchParams.get('toCategory')
 

  const handleAddFilter = (isCategory:any,isBrand?:any) =>{
    navigate(`/productsList?toCategory=${isCategory}&brand=${isBrand}`)
  };

  const handleTest = (brand:any)=>{
    switch (brand) {
    case 'phone':
      return <div style={{display:'grid'}}>
        {
        brandsList.phones.map((index:any)=>{
        return(<FormControlLabel  control={<Checkbox/>} label={index} checked={searchParams.get('brand') === `${index}`} onClick={()=>handleAddFilter(isCategory,index)}/>)
        })
        }
      </div>
    case 'watches':
      return <div style={{display:'grid'}}>
      {
      brandsList.watches.map((index:any)=>{
      return(<FormControlLabel control={<Checkbox/>} label={index} checked={searchParams.get('brand') === `${index}`} onClick={()=>handleAddFilter(isCategory,index)}/>)
      })
      }
    </div>
    case 'tablets':
      return <div style={{display:'grid'}}>
      {
      brandsList.tablets.map((index:any)=>{
      return(<FormControlLabel control={<Checkbox/>} label={index} checked={searchParams.get('brand') === `${index}`} onClick={()=>handleAddFilter(isCategory,index)}/>)
      })
      }
    </div>
    case 'laptops':
      return <div style={{display:'grid'}}>
      {
      brandsList.laptops.map((index:any)=>{
      return(<FormControlLabel control={<Checkbox/>} label={index} checked={searchParams.get('brand') === `${index}`} onClick={()=>handleAddFilter(isCategory,index)}/>)
      })
      }
    </div>
    case 'pc':
      return <div style={{display:'grid'}}>
      {
      brandsList.laptops.map((index:any)=>{
      return(<FormControlLabel control={<Checkbox/>} label={index} checked={searchParams.get('brand') === `${index}`} onClick={()=>handleAddFilter(isCategory,index)}/>)
      })
      }
    </div>
    case 'headphones':
      return <div style={{display:'grid'}}>
      {
      brandsList.headphones.map((index:any)=>{
      return(<FormControlLabel control={<Checkbox/>} label={index} checked={searchParams.get('brand') === `${index}`} onClick={()=>handleAddFilter(isCategory,index)}/>)
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
export default FilterBrands;