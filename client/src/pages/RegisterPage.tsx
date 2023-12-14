import React from 'react';
import { Box } from '@mui/material';
import RegisterForm from '../widgets/RegisterPage/RegisterForm';

const RegisterPage: React.FunctionComponent = () => {
	return (
		<Box sx={backgroundStyle}>
			<Box sx={{ display: 'flex' }}>
				<RegisterForm />
			</Box>
		</Box>
	);
};
export default RegisterPage;

const backgroundStyle = {
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#ECE8DD',
	height: { md: '88vh', sm: '88vh', xs: '110vh' },
};
