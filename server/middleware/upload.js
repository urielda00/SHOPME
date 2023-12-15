// Upload images with multer- not available with react hook form- here for future use.
import multer from 'multer';
import path from 'path';

const upload = multer({
	dest: './uploads',
	fileFilter: (req, file, cb) => {
		const extension = path.extname(file.originalname).toLowerCase();
		const mimeType = file.mimetype;
		if (extension == '.jpg' || extension == '.jpeg' || extension == '.png' || mimeType == 'image/png' || mimeType == 'image/jpg' || mimeType == 'image/jpeg') {
			console.log('uploaded in multer');
			cb(null, true);
		} else {
			console.log('file must be photo or pdf!');
		}
	},
	limits: {
		fileSize: 1024 * 1024 * 5, //5MB
	},
});

export const multipleUpload = multer({ dest: './uploads' });
export default upload;
