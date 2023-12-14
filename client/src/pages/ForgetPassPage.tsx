import React from 'react';
import { Box } from '@mui/material';
import { backgroundStyle } from './CreateItem';
import Forget from '../widgets/AllResetPass/Forget';

const ForgetPassPage: React.FunctionComponent = () => {
	return (
		<Box sx={backgroundStyle}>
			<Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex' } }}>
				<Forget />
			</Box>
		</Box>
	);
};
export default ForgetPassPage;
