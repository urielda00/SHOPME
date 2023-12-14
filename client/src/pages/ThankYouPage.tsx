import React from 'react';
import { Box } from '@mui/material';
import checkImg from '../assets/ThankPage/check1.png';
import { styledImg, styledBtn, styledPopup, StyledContainer } from '../styles/ThankYou/ThankYouStyle';

const ThankYouPage: React.FunctionComponent = () => {
	return (
		<div style={StyledContainer}>
			<Box sx={styledPopup}>
				<img src={checkImg} style={styledImg} alt='info-recived!'></img>
				<h2>Thank you!</h2>
				<p>Your details sent successfully</p>
				<form action='/'>
					<button style={styledBtn}>Press here to return</button>
				</form>
			</Box>
		</div>
	);
};
export default ThankYouPage;
