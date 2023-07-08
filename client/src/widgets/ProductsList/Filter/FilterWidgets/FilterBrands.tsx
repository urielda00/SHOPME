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
        brandsList.phones.map((item:any,index)=>{
        return(<FormControlLabel key={index}  control={<Checkbox/>} label={item} checked={searchParams.get('brand') === `${item}`} onClick={()=>handleAddFilter(isCategory,item)}/>)
        })
        }
      </div>
    case 'watches':
      return <div style={{display:'grid'}}>
      {
      brandsList.watches.map((item:any,index)=>{
      return(<FormControlLabel key={index} control={<Checkbox/>} label={item} checked={searchParams.get('brand') === `${item}`} onClick={()=>handleAddFilter(isCategory,item)}/>)
      })
      }
    </div>
    case 'tablets':
      return <div style={{display:'grid'}}>
      {
      brandsList.tablets.map((item:any,index)=>{
      return(<FormControlLabel key={index} control={<Checkbox/>} label={item} checked={searchParams.get('brand') === `${item}`} onClick={()=>handleAddFilter(isCategory,item)}/>)
      })
      }
    </div>
    case 'laptops':
      return <div style={{display:'grid'}}>
      {
      brandsList.laptops.map((item:any,index)=>{
      return(<FormControlLabel key={index} control={<Checkbox/>} label={item} checked={searchParams.get('brand') === `${item}`} onClick={()=>handleAddFilter(isCategory,item)}/>)
      })
      }
    </div>
    case 'pc':
      return <div style={{display:'grid'}}>
      {
      brandsList.laptops.map((item:any,index)=>{
      return(<FormControlLabel key={index} control={<Checkbox/>} label={item} checked={searchParams.get('brand') === `${item}`} onClick={()=>handleAddFilter(isCategory,item)}/>)
      })
      }
    </div>
    case 'headphones':
      return <div style={{display:'grid'}}>
      {
      brandsList.headphones.map((item:any,index)=>{
      return(<FormControlLabel key={index} control={<Checkbox/>} label={item} checked={searchParams.get('brand') === `${item}`} onClick={()=>handleAddFilter(isCategory,item)}/>)
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