import * as React from 'react';
import { Toolbar } from '@mui/material';
import { useAppSelector } from '../app/hooks';
import LargeScreen from '../widgets/Navbar/LARGE/LargeScreen';
import SmallScreen from '../widgets/Navbar/SMALL/SmallScreen';
import MediumScreen from '../widgets/Navbar/MEDIUM/MediumScreen';

//Types:
interface Props {
	isActive: boolean;
}

// The component
const NavBar: React.FunctionComponent = () => {
	const { totalQuantity } = useAppSelector((state) => state.allCart);
	return (
		<>
			{/* for large screens: */}
			<Toolbar disableGutters style={StyledNavBar} sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
				<LargeScreen />
			</Toolbar>

			{/* for medium screens: */}
			<Toolbar disableGutters style={StyledMiddleNavBar} sx={{ display: { xs: 'none', sm: 'flex', md: 'none' } }}>
				<MediumScreen totalQuantity={totalQuantity} />
			</Toolbar>

			{/* for small screens: */}
			<Toolbar disableGutters style={StyledXSmallNavBar} sx={{ display: { xs: 'flex', sm: 'none', md: 'none' } }}>
				<SmallScreen totalQuantity={totalQuantity} />
			</Toolbar>
		</>
	);
};
export default NavBar;

const StyledNavBar: React.CSSProperties = {
	top: '0',
	zIndex: 10,
	width: '100%',
	height: '90px',
	position: 'sticky',
	alignItems: 'center',
	padding: '16px 16px',
	background: '#fff',
	justifyContent: 'space-between',
	boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset',
};

const StyledMiddleNavBar: React.CSSProperties = {
	top: '0',
	zIndex: 10,
	width: '100%',
	height: '90px',
	position: 'sticky',
	background: '#fff',
	alignItems: 'center',
	padding: '16px 16px',
	justifyContent: 'space-between',
	boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset',
};

const StyledXSmallNavBar: React.CSSProperties = {
	top: '0',
	zIndex: 10,
	width: '100%',
	height: '90px',
	position: 'sticky',
	alignItems: 'center',
	padding: '16px 16px',
	background: '#fff',
	justifyContent: 'space-between',
	boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset',
};

export const navLinkStyle = ({ isActive }: Props) => {
	return {
		textDecoration: 'none',
		color: isActive ? 'black' : 'black',
		padding: isActive ? '1rem' : '1rem',
		fontWeight: isActive ? 'bold' : 'normal',
	};
};
