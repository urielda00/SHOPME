import axios from 'axios';
import baseRenderUrl from '../../assets/baseUrl';

// Add item to the cart:
export const addToCartAPI = (itemData, userName) => {
	axios
		.post(`${baseRenderUrl}/cart/addToCart`, {
			userName,
			itemData,
		})
		.catch((error) => {
			console.log('error in addToCartAPI:', error);
		});
};

// Update item that already in the cart:
export const updateInAddToCartAPI = (itemId, userName, totalPrice) => {
	axios
		.post(`${baseRenderUrl}/cart/updateInAddToCart`, {
			userName,
			itemId,
			totalPrice,
		})
		.catch((error) => {
			console.log('error in updateInAddToCartAPI:', error);
		});
};
