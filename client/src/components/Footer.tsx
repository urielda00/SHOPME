import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box, Container } from '@mui/material';

function Copyright() {
	return (
		<Box sx={{ color: 'grey', textAlign: 'center' }}>
			{'Copyright © '}
			<Link color='inherit' to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
				SHOPME
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Box>
	);
}

// The component:
const Footer: React.FunctionComponent = () => {
	return (
		<Box
			sx={{
				bottom: '1px',
				display: 'flex',
				minHeight: '100px',
				flexDirection: 'column',
			}}
		>
			<Box component='footer' sx={{ py: 4, backgroundColor: '#EEEEEE', textAlign: 'center' }}>
				<Container maxWidth='sm'>
					<Typography variant='body1'>Here is the sticky footer</Typography>
					<Copyright />
				</Container>
			</Box>
		</Box>
	);
};
export default Footer;
