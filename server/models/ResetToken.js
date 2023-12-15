import mongoose from 'mongoose';

const ResetTokenSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
			unique: true,
		},
		token: { type: String, required: true },
		expire_at: { type: Date, default: Date.now, expires: 60 * 1000 * 2 }, //2min
	},
	{ timestamps: true }
);

const ResetToken = mongoose.model('ResetToken', ResetTokenSchema);
export default ResetToken;
