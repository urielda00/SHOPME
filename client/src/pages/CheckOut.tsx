import React from 'react';
import SpeedDialCheckout from '../widgets/Checkout/SpeedDial';
import { Box } from '@mui/material';

const CheckOut: React.FunctionComponent = () => {
	return (
		<Box sx={backgroundStyle}>
			<SpeedDialCheckout />
		</Box>
	);
};
export default CheckOut;

const backgroundStyle = {
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#d2c9ff',
	height: { md: '88vh', sm: '88vh', xs: '90vh' },
};
