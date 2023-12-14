import axios from 'axios';
import baseRenderUrl from '../../assets/baseUrl';

// CREATE ORDER:
export const createOrderAPI = (address, products, userName) => {
	axios
		.post(`${baseRenderUrl}/order/createOrder`, {
			userName,
			address,
			products,
		})
		.then((res) => {
			console.log('res:', res.data);
		})
		.catch((error) => {
			console.log('error in addToCartAPI:', error);
		});
};
