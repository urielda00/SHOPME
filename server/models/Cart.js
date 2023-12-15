import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			unique: true,
		},
		products: [Object],
		totalPrice: {
			type: Number,
			required: true,
		},
		totalItemsInCart: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

const Cart = mongoose.model('Cart', CartSchema);
export default Cart;
