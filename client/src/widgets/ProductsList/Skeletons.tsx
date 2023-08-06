import {Skeleton, Stack} from '@mui/material';

export const Skeletons = () => {
  return (
       <Stack spacing={0.2} direction='row' sx={{width:'76%'}}>
            <Stack>
              <Skeleton variant="rectangular" width={270} height={250} />
            </Stack>
            <Stack spacing={-2.5}> 
               <Skeleton variant="text" width={270} height={50} />
               <Skeleton variant="text" width={300} height={70} />
               <Skeleton variant="text" width={190} height={60} />
               <Skeleton variant="text" width={100} height={90} />
               <Stack spacing={-1.5}>
               <Skeleton variant="text" width={80} height={40} />
               <Skeleton variant="text" width={80} height={40} />
               </Stack>
            </Stack>          
        </Stack>
  )
};
