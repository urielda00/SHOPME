import React from 'react';
import { Button } from '@mui/material';

interface PopUpOnStartProps {
	closePopup: () => void;
}

const PopUpOnStart: React.FC<PopUpOnStartProps> = ({ closePopup }) => {
	return (
		<div className='popup-overlay'>
			<div className='popup'>
				<h2>Attention!</h2>
				<h3>This site use the render.com deployment free plan for the server side</h3>
				<h3>Meaning that the first connect to the server will take between 1-2 minutes, and then the website will work as usual</h3>
				<div>
					<Button variant='contained' sx={{ bgcolor: 'black', ':hover': { bgcolor: 'grey' } }} onClick={closePopup}>
						Close
					</Button>
				</div>
			</div>
		</div>
	);
};
export default PopUpOnStart;
