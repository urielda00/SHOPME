import mongoose from 'mongoose';

const AddressSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		fullAddressInfo: {
			type: [Object], //todo: add optional autofill for the  addresses represented here.
		},
		addressList: {
			type: [String],
		},
	},
	{ timestamps: true }
);

const Address = mongoose.model('Address', AddressSchema);
export default Address;
