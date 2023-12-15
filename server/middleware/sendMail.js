import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

// SEND MAIL FOR RESET PASS:
export const sendMail = async (email, subject, text) => {
	try {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.EMAIL,
				pass: process.env.EMAIL_PASS,
			},
		});

		// 'thesmoke1733@gmail.com'
		const mailOptions = {
			from: process.env.EMAIL,
			to: email,
			subject: subject,
			text: text,
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log(error);
				return false;
			} else {
				console.log('Email sent: ' + info.response);
			}
		});
	} catch (error) {
		console.log('email not sent!');
		console.log(error);
	}
};
