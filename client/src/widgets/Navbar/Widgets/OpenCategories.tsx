import { Box } from "@mui/material";
import React,{useState} from "react";
import { Link } from "react-router-dom";
//neet to change the links on the categories.

//The arrays to loop on:
const categoriesList = [
  {name:'Mobiles', category:'phones'},
  {name:'Laptops', category:'laptops'},
  {name:'Watches', category:'watches'},
  {name:'Tablets', category:'tablets'},
  {name:'HeadPhones', category:'headPhones'},
  {name:'PC', category:'pc'},
];

const shopList = [
  {name:'Shop All',link:'/infinity'},
  {name:'New In',link:'/newItems'},
  {name:'Best Offers',link:'/bestOffers'},
  {name:'2023 Items',link:'/items/2023'},
  {name:'2022 Items',link:'/items/2022'}
];

const supportList = [
  {name:'My account',link:'/user/account'},
  {name:'FAQ',link:'/faq'},
  {name:'Terms',link:'/terms'},
  {name:'Privacy Policy',link:'privacyPolicy'}
];

 const OpenCategories = ({hover}:any) => {
  //Get the hover prop from the navbar, and apear if true.
    const someStyle :any=(hover:any)=> {
    return {
    width:'1000px',
    height:'400px',
    backgroundColor:'#FCE9F1',
    top:'60px',
    left:'20px',
    position:'absolute',
    display:hover?'flex':'none',
    borderRadius:'10px',
    padding:'20px',
    justifyContent:'space-between',
    boxShadow: '0 1px 2px  rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) '
    }
  };

  return (
    <Box style={someStyle(hover)}>
       <Box sx={childContainerStyle}>
         <h1 style={h1Style}>Categories</h1>
         <ul style={{listStyle:'none'}}>
            {
              categoriesList.map((item:any,index:any)=>{
                return(
                  <Box sx={{":hover":{fontSize:'20px'}}} key={index} >
                     <Link style={linkStyle} to={`/infinity?toCategory=${item.category}`}>                
                       <p style={{marginBottom:'20px'}}>{item.name}</p>
                    </Link>
                  </Box>
                )
              })
            }
         </ul>
      </Box>

      <Box sx={childContainerStyle}>
         <h1 style={h1Style}>Shop</h1>
         <ul style={{listStyle:'none'}}>
            {
              shopList.map((item:any,index:number)=>{
                return(
                  <Box sx={{":hover":{fontSize:'20px'}}} key={index}>
                    <Link style={linkStyle} to={item.link}>
                      <p style={{marginBottom:'20px'}}>{item.name}</p>
                     </Link>
                 </Box>
               )
              })
            }
         </ul>
      </Box>

      <Box sx={childContainerStyle}>
         <h1 style={h1Style}>Support</h1>
           <ul style={{listStyle:'none'}}>
              {
                supportList.map((item:any,index:number)=>{
                  return(
                    <Box sx={{":hover":{fontSize:'20px'}}} key={index}>
                       <Link style={linkStyle} to={item.link}>
                         <p style={{marginBottom:'20px'}} >{item.name}</p>
                      </Link>
                    </Box>
                   )
                })
              }
           </ul>
      
      </Box>
    </Box>
  )
};
export default OpenCategories;


//Style here:
const linkStyle:React.CSSProperties = {
  textDecoration:'none',
  color:'black'
};
const h1Style:React.CSSProperties = {
  marginBottom:'25px',
  textDecoration:'underline 1px',
  textUnderlineOffset:'8px'
};
const childContainerStyle:React.CSSProperties = {
  width:'32%',
  textAlign:'center',
  padding:'10px'
};

