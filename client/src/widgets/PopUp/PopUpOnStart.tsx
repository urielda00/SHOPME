import React from 'react';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
interface PopUpOnStartProps {
	closePopup: () => void;
}

const PopUpOnStart: React.FC<PopUpOnStartProps> = ({ closePopup }) => {
	return (
		<div className='popup-overlay'>
			<div className='popup'>
				<h2>Attention!</h2>
				<h3>This website is an initial version created during the learning process. A new and improved version is now available. Click the link to visit the updated site, or press close to ignore.</h3>
				<Box sx={{display:"flex",gap:"10px"}}>
					<Button component={Link} to={window.location.href} variant='contained' sx={{ bgcolor: 'grey', ':hover': { bgcolor: 'grey' } }} onClick={closePopup}>
						Close
					</Button>
					<Button component={Link} to="https://celadon-cat-38fbfa.netlify.app/" variant='contained' sx={{ bgcolor: 'black', ':hover': { bgcolor: 'grey' } }} onClick={closePopup} >
						Go There
					</Button>
				</Box>
			</div>
		</div>
	);
};
export default PopUpOnStart;
