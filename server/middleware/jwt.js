// this is still trial - not done yet.
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export const checkJWT = async (req, res, next) => {
	const token = req.cookies.session_token;
	if (!token) {
		console.log('bad authorization! (JWT-delete this message later)');
		return res.redirect('https://bejewelled-fenglisu-523224.netlify.app/login');
	}
	try {
		const data = jwt.verify(token, process.env.JWT_ACCESS_KEY);
		console.log(process.env.JWT_ACCESS_KEY);
		return next();
	} catch (error) {
		return res.status(403).json({ message: 'Bad login' });
	}
};
