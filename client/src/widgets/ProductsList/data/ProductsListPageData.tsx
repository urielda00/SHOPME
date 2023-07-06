//Icons import:
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import WatchIcon from '@mui/icons-material/Watch';
import TabletIcon from '@mui/icons-material/Tablet';
import LaptopIcon from '@mui/icons-material/Laptop';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import HeadphonesIcon from '@mui/icons-material/Headphones';
// import AnimationIcon from '@mui/icons-material/Animation';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

//The data for the secondrary category filterBar
export const categoryList = [
  {name:'See All',icon:<AllInclusiveIcon/>,category:false},
  {name:'SmartPhones',icon:<PhoneAndroidIcon/>,category:'phone'},
  {name:'Whatches',icon:<WatchIcon/>,category:'watches'},
  {name:'Tablets',icon:<TabletIcon/>,category:'tablets'},
  {name:'Laptops',icon:<LaptopIcon/>,category:'laptops'},
  {name:'PC',icon:<DesktopMacIcon/>,category:'pc'},
  {name:'Headphones',icon:<HeadphonesIcon/>,category:'headphons'},
];

export const yearsList = [
  {year:2023},
  {year:2022},
  {year:2021},
  {year:2020},
  {year:2019},
];
export const  osList=[
  {os:'Android'},
  {os:'Windows11'},
  {os:'Windows10'},
  {os:'macOS'},
  {os:'Linux'},
  {os:'iOS'}
];

export const osCaseList = {
    phones:['Android','iOS'],
    laptops:['Windows11','Windows10','macOS','Linux'],
  };

export const brandsList = {
  phones:['Google','SAMSUNG','Apple','OnePlus','Xiaomi','LG','Nokia','Nothing'],
  whatches:['Fitbit','Garmin','SAMSUNG','Apple'],
  tablets:['SAMSUNG','Lenovo','Amazon','Apple','Microsoft','Dell','Asus'],
  laptops:['HP','Lenovo','Dell','ASUS','SAMSUNG','MSI','Microsoft','Apple'],
  headphones:['JBL','Sennheiser','Sony','Bose','SAMSUNG','Apple','Jabra']
};

