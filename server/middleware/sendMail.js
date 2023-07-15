import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();


// export const sendMail = async (email, subject, text) => {
// 	try {
// 		const transporter = nodemailer.createTransport({
// 			host: 'smtp.forwardemail.net',
// 			service: process.env.SERVICE,
// 			port: 400,
// 			secure: true,
// 			auth: {
// 				user: process.env.EMAIL,
// 				pass: process.env.EMAIL_PASS,
// 			},
// 		});

// 		await transporter.sendMail({
// 			from: process.env.EMAIL,
// 			to: email,
// 			subject: subject,
// 			text: text,
// 		});

		// console.log("email sent successfully");
// 	} catch (error) {
		// console.log("email not sent!");
		// console.log(error);
		// return error;
// 	}
// };

export const sendMail = async (email, subject, text)=>{
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
      }
    });
    // 'thesmoke1733@gmail.com'
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: subject,
      text: text
    };
    
    transporter.sendMail(mailOptions,(error, info)=>{
      if (error) {
        console.log(error)
        return false;
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  } catch (error) {
    console.log("email not sent!");
		console.log(error);
  } 
};


