import React from 'react';
import { Box } from '@mui/material';
import { backgroundStyle } from './CreateItem';
import LoginForm from '../widgets/LoginPage/LoginForm';


const LoginPage: React.FunctionComponent = () => {
	return (
		<Box sx={backgroundStyle}>
			<Box sx={{ display: 'flex' }}>
				<LoginForm />
			</Box>
		</Box>
	);
};

export default LoginPage;