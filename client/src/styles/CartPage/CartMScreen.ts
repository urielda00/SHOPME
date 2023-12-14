import * as React from 'react';

const containerStyle: React.CSSProperties = {
	width: '90%',
	height: '70vh',
	display: 'flex',
	padding: '30px',
	minWidth: '650px',
	overflow: 'hidden',
	borderRadius: '20px',
	backgroundColor: '#fff',
	flexDirection: 'column',
};

const listStyle: React.CSSProperties = {
	width: '100%',
	display: 'flex',
	marginTop: '7px',
	listStyle: 'none',
	marginBottom: '10px',
	alignItems: 'center',
	justifyContent: 'space-between',
};

const textFieldStyle: React.CSSProperties = {
	width: '96%',
	color: 'black',
	marginTop: '5px',
	backgroundColor: '#EDC6B1',
};

export { textFieldStyle, listStyle, containerStyle };
