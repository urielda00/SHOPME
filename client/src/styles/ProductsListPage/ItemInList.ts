const containerLStyle = {
	height: '280px',
	width: '100%',
	backgroundColor: '#fff',
	marginBottom: '1px',
	display: { xs: 'none', sm: 'none', md: 'flex' },
	justifyContent: 'space-between',
	padding: '20px',
	borderBottom: '1px solid grey',
	boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.1) inset',
};

const containerMStyle = {
	height: '240px',
	width: '100%',
	backgroundColor: '#fff',
	marginBottom: '1px',
	display: { xs: 'none', sm: 'flex', md: 'none' },
	justifyContent: 'space-between',
	padding: '15px',
	borderBottom: '1px solid grey',
	boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.1) inset',
};

const containerSStyle = {
	height: '220px',
	width: '100%',
	backgroundColor: '#fff',
	marginBottom: '1px',
	display: { xs: 'flex', sm: 'none', md: 'none' },
	justifyContent: 'space-between',
	padding: '20px',
	borderBottom: '1px solid grey',
	boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.1) inset',
};

export { containerLStyle, containerMStyle, containerSStyle };
