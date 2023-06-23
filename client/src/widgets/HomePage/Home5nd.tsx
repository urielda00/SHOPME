import * as React from 'react';
import { CarouselItem } from './CarouselItem';
import { items } from './CarouselItem';
import { Box ,Button, Radio, RadioGroup, FormControlLabel} from '@mui/material';
import { Link } from 'react-router-dom';


//Links:
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

//Component:
 const Home5nd = () => {
 const [activeIndex, setActiveIndex] = React.useState(0);
 const updateIndex = (newIndex:any) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }
    setActiveIndex(newIndex);
  };


  return (
    <Box  sx={{width:'100%',height:'100vh',display:'flex',
      justifyContent:'center',alignItems:'center',overflow:'hidden',position:'relative'}}>
       
         <div style={{ 
          height:'100vh',
          whiteSpace: 'nowrap',
          transition: 'transform 1.3s',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',transform: `translate(-${activeIndex * 100}%)`}}>
           {items.map((item) => {
          return <CarouselItem item={item} width={"100%"}/>;
            })
            }
         </div>
      
        <div style={{display:'flex',justifyContent:'space-evenly',width:'100%',top:'97vh',
          left:'0vw',height:'5vh',marginTop:'-60px',position:'absolute'}}>

          {/* the button to the left */}
           <Button
             className="button-arrow"
             onClick={() => {
             updateIndex(activeIndex - 1);
             }}>
             <span className="material-symbols-outlined"><ChevronLeftIcon fontSize='large'/></span>{" "}
           </Button>

          {/* the radio buttons */}
              <div className="indicators">
                <RadioGroup value={activeIndex} row> 
                  <FormControlLabel onClick={()=>{setActiveIndex(0)}} value={0} control={<Radio/>} label={''}/>
                  <FormControlLabel onClick={()=>{setActiveIndex(1)}} value={1} control={<Radio/>} label={''}/>
                  <FormControlLabel onClick={()=>{setActiveIndex(2)}} value={2} control={<Radio/>} label={''}/>
                </RadioGroup>  
              </div>

            {/* the button to the right */}
           <Button
             className="button-arrow"
             onClick={() => {
             updateIndex(activeIndex + 1);
             }}>
             <span className="material-symbols-outlined"><ChevronRightIcon fontSize='large'/></span>
           </Button>
      </div>
      {/* the link to- buy now */}
       <Link to='/' style={{textDecoration:'none',fontSize:'20px',color:'white'}}>
         <Box sx={{":hover":{opacity:'0.7'}}} style={{width:'200px',height:'60px',
              display:'flex', alignItems:'center',justifyContent:'center',marginTop:'-100px', borderRadius:'50px', backgroundColor:'black', position:'absolute',top:'91vh',left:'42vw'}}>
              <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
               More Info
               <ChevronRightIcon/>
             </div>
         </Box>
       </Link>
    </Box>
  );
};

export default Home5nd;

const carousel: React.CSSProperties= {
    overflow: 'hidden',
    width: '100%',
    display: 'flex',
    height: '100vh',
    borderRadius:'20px',
    border:'2px solid black',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  const inner:React.CSSProperties= {
    whiteSpace: 'nowrap',
    transition: 'transform 0.3s',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
  }