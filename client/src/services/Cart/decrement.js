import axios from 'axios';
import baseRenderUrl from '../../assets/baseUrl';

// Decrement if the quantity is more than 1:
export const decrementCartAPI1 = (item, userName) => {
	axios
		.post(`${baseRenderUrl}/cart/decrementQuantity1`, {
			userName,
			item,
		})
		.catch((error) => {
			console.log('error in decrement cart:', error);
		});
};

// Decrement if the quantity is less than 1:

export const decrementCartAPI2 = (item, userName) => {
	axios
		.post(`${baseRenderUrl}/cart/decrementQuantity2`, {
			userName,
			item,
		})
		.catch((error) => {
			console.log('error in decrement2 cart:', error);
		});
};
