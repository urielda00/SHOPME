import React from 'react';
import { Box } from '@mui/material';
import CartLScreen from '../widgets/Cart/CartLScreen';
import CartMScreen from '../widgets/Cart/CartMScreen';
import CartSScreen from '../widgets/Cart/CartSScreen';

const CartPage: React.FunctionComponent = () => {
	return (
		<div className='ScrollCartStyle'>
			{/* for big screens: */}
			<Box sx={largeStyle}>
				<CartLScreen />
			</Box>

			{/* for medium screens: */}
			<Box sx={mediumStyle}>
				<CartMScreen />
			</Box>

			{/* for small screens: */}
			<Box sx={smallStyle}>
				<CartSScreen />
			</Box>
		</div>
	);
};
export default CartPage;

// Style here:
const largeStyle = {
	flex: '1',
	height: '83.4vh',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#d2c9ff',
	display: { xs: 'none', sm: 'none', md: 'flex' },
};

const mediumStyle = {
	flex: '1',
	height: '85vh',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#d2c9ff',
	display: { xs: 'none', sm: 'flex', md: 'none' },
};

const smallStyle = {
	flex: '1',
	height: '100vh',
	justifyContent: 'center',
	backgroundColor: '#d2c9ff',
	display: { xs: 'flex', sm: 'none', md: 'none' },
};
