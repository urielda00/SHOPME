import axios from 'axios';
import baseRenderUrl from '../../assets/baseUrl';

export const incrementCartAPI = (item, userName) => {
	axios
		.post(`${baseRenderUrl}/cart/incrementQuantity`, {
			userName,
			item,
		})
		.catch((error) => {
			console.log('error in increment cart:', error);
		});
};
