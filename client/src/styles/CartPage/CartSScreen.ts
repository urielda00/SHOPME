import * as React from 'react';

const containerStyle: React.CSSProperties = {
	width: '90%',
	height: '90vh',
	padding: '20px',
	display: 'flex',
	marginTop: '30px',
	minWidth: '380px',
	overflow: 'hidden',
	borderRadius: '20px',
	flexDirection: 'column',
	backgroundColor: '#fff',
};

const liStyle: React.CSSProperties = {
	width: '100%',
	display: 'flex',
	height: '120px',
	marginTop: '4px',
	listStyle: 'none',
	alignItems: 'center',
	justifyContent: 'space-between',
	boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ',
};

export { liStyle, containerStyle };
