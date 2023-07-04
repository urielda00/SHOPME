import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

 const Loading = () => {
  return (
    <Box sx={{ display: 'flex', width:'100%' , height:'80vh',flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
      <CircularProgress />
      Loading...
    </Box>
  );
}
export default Loading;