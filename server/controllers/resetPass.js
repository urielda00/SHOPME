// The worst time complexity in this controller: O(1)

import crypto from 'crypto';
import bcrypt from 'bcrypt';
import User from '../models/User.js';
import ResetToken from '../models/ResetToken.js';
import { sendMail } from '../middleware/sendMail.js';
import { ResetPassErrorLogger, ResetPassInfoLogger } from '../middleware/winston.js';

//Send password link:
export const sendLink = async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (!user) {
			ResetPassErrorLogger.log('error', 'The Email is not exist status code: 409');
			return res.status(409).send({ message: 'User with given email does not exist!' });
		}

		let token = await ResetToken.findOne({ userId: user._id });
		if (!token) {
			token = await new ResetToken(
				{
					userId: user._id,
					token: crypto.randomBytes(32).toString('hex'),
				},
				{}
			).save();
		}

		const url = `https://bejewelled-fenglisu-523224.netlify.app/resetPass/${user._id}/${token.token}`;
		await sendMail(user.email, 'Password Reset', url);
		ResetPassInfoLogger.log('info', 'Reset link sent. status code: 200');
		res.end();
	} catch (error) {
		ResetPassErrorLogger.log('error', `${error.message}. status code: 500`);
		res.status(500).send({ message: error.message });
	}
};

//Verify resetPassPage link:
export const verifyUrl = async (req, res) => {
	try {
		const user = await User.findOne({ _id: req.params.id });
		if (!user) {
			ResetPassErrorLogger.log('error', 'Invalid Link. status code: 400');
			return res.status(400).send({ message: 'Invalid Link' });
		}

		const token = await ResetToken.findOne({
			userId: user._id,
			token: req.params.token,
		});

		if (!token) {
			ResetPassErrorLogger.log('error', 'Invalid Link. status code: 400');
			return res.status(400).send({ message: 'Invalid Link' });
		}

		ResetPassInfoLogger.log('info', 'Valid Url. status code: 200');
		res.status(200).send({ message: 'Valid Url' });
	} catch (error) {
		ResetPassErrorLogger.log('error', `${error.message}. status code: 500`);
		res.status(500).send({ message: error.message });
	}
};

//Reset the password:
export const resetPass = async (req, res) => {
	try {
		// Check again if the url is valid:
		const user = await User.findOne({ _id: req.params.id });
		if (!user) {
			ResetPassErrorLogger.log('error', 'Invalid Link. status code: 400');
			return res.status(400).send({ message: 'Invalid Link' });
		}

		const token = await ResetToken.findOne({
			userId: req.params.id,
			token: req.params.token,
		});

		if (!token) {
			ResetPassErrorLogger.log('error', 'Invalid Link. status code: 400');
			return res.status(400).send({ message: 'Invalid Link' });
		}

		// Hash the password:
		const salt = await bcrypt.genSalt();
		const passwordHash = await bcrypt.hash(req.body.password, salt);
		user.password = passwordHash;
		await user.save();

		// delete the token from the db:
		await ResetToken.deleteOne({ userId: req.params.id });
		ResetPassInfoLogger.log('info', 'Password Reset Successfully. status code: 200');
		res.status(200).send('ok');
	} catch (error) {
		ResetPassErrorLogger.log('error', `${error.message}. status code: 500`);
		res.status(500).send({ message: error.message });
	}
};
