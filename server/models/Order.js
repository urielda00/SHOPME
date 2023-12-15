import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
	{
		address: {
			type: [String],
			required: true,
		},
		date: {
			type: String,
			required: true,
		},
		userId: {
			type: String,
			required: true,
		},
		productsId: {
			type: [String],
			required: true,
		},
		totalPrice: {
			type: Number,
		},
	},
	{ timestamps: true }
);

const Order = mongoose.model('Order', OrderSchema);
export default Order;
