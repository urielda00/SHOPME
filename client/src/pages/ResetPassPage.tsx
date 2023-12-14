import React from 'react';
import { Box } from '@mui/material';
import { backgroundStyle } from './CreateItem';
import Reset from '../widgets/AllResetPass/Reset';

const ResetPassPage: React.FunctionComponent = () => {
	return (
		<Box sx={backgroundStyle}>
			<Box sx={{ display: 'flex' }}>
				<Reset />
			</Box>
		</Box>
	);
};

export default ResetPassPage;
