import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

const DisplayAvatar = ()=> {
  return (
    <Stack>
      <Avatar style={{width:'25px',height:'25px'}} sx={{ bgcolor: deepOrange[500] }}>U</Avatar>
    </Stack>
  );
};
export default DisplayAvatar;