import * as React from 'react';

const container: React.CSSProperties = {
	width: '85%',
	height: '70vh',
	display: 'flex',
	padding: '40px',
	minWidth: '900px',
	overflow: 'hidden',
	borderRadius: '20px',
	backgroundColor: '#fff',
	justifyContent: 'space-between',
	flexDirection: 'row'
};

const childContainer1: React.CSSProperties = {
	width: '65%',
	display: 'flex',
	overflowY: 'scroll',
	overflowX: 'hidden',
	justifyContent: 'space-between',
};

const liStyle: React.CSSProperties = {
	display: 'flex',
	listStyle: 'none',
	justifyContent: 'space-between',
};

export { liStyle, childContainer1, container };
