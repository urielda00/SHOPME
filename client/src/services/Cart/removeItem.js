import axios from 'axios';
import baseRenderUrl from '../../assets/baseUrl';

export const removeItemAPI = (item, userName) => {
	axios
		.post(`${baseRenderUrl}/cart/removeItem`, {
			userName,
			item,
		})
		.catch((error) => {
			console.log('error in remove item from cart:', error);
		});
};
