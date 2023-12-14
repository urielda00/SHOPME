import axios from 'axios';
import baseRenderUrl from '../../assets/baseUrl';

export const resetCartAPI = (userName) => {
	axios
		.post(`${baseRenderUrl}/cart/resetCart`, {
			userName,
		})
		.catch((error) => {
			console.log('error in reset cart:', error);
		});
};
