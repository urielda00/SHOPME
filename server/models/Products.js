import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
	{
		productName: String,
		shortDescription: String,
		longDescription: String,
		price: {
			type: Number,
			required: true,
		},
		quantity: Number,
		productImages: [String],
		status: String,
		company: String,
		releaseYear: Number,
		os: String,
		brand: String,
		image: String,
		category: String,
	},
	{ timestamps: true }
);

const Product = mongoose.model('Product', ProductSchema);
export default Product;
