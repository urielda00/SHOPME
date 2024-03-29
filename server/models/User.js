import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			min: 2,
			max: 50,
		},
		lastName: {
			type: String,
			required: true,
			min: 2,
			max: 50,
		},
		userName: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			max: 50,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			min: 5,
		},
		phoneNumber: {
			type: Number, //todo: add the phone number validator.
			required: true,
		},
		orders: {
			type: [String],
			required: false,
		},
		avatar: String,
	},
	{ timestamps: true }
);

const User = mongoose.model('User', UserSchema);
export default User;
