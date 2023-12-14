import * as React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NomatchPage: React.FunctionComponent = () => {
	return (
		<div style={Container}>
			<div style={InsideDiv}>
				<h2>Oops! Page not found.</h2>
				<h1 id='h1-notMatch'>404</h1>
				<p>We can't find the page you're looking for.</p>
				<Link to='/'>
					<Button variant='contained' style={{ borderRadius: '20px', backgroundColor: '#fff', color: 'black', marginTop: '10px' }}>
						Back To Home
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default NomatchPage;

//Style:
const Container: React.CSSProperties = {
	width: '100%',
	float: 'none',
	height: `83vh`,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	fontFamily: '"montserrat",sans-serif',
	backgroundImage: 'linear-gradient(125deg,#6a89cc,#b8e994)',
};

const InsideDiv: React.CSSProperties = {
	top: '50%',
	width: '100%',
	marginTop: '3%',
	color: '#343434',
	textAlign: 'center',
	position: 'absolute',
	transform: 'translateY(-50%)',
};
