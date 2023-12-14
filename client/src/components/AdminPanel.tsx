import React from 'react';
import { Link } from 'react-router-dom';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Box, SpeedDial, SpeedDialIcon, SpeedDialAction } from '@mui/material';

const actions = [
	{
		icon: (
			<Link to={'/createItem'}>
				<NoteAddIcon />
			</Link>
		),
		name: 'New Item',
	},
	{
		icon: (
			<Link to={'/updateItem'}>
				<AutorenewIcon />
			</Link>
		),
		name: 'Update Item',
	},
	{
		icon: (
			<Link to={'/deleteItem'}>
				<DeleteOutlineIcon />
			</Link>
		),
		name: 'Delete Item',
	},
];

const AdminPanel = () => {
	const { isAdmin } = useAppSelector((state) => state.user);
	const isLogged = window.sessionStorage.getItem('isLogged');
	return (
		<>
			{isAdmin && isLogged === 'true' ? (
				<Box>
					<SpeedDial ariaLabel='SpeedDial basic example' sx={speedDialStyle} icon={<SpeedDialIcon />}>
						{actions.map((action) => (
							<SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
						))}
					</SpeedDial>
				</Box>
			) : (
				<div hidden></div>
			)}
		</>
	);
};
export default AdminPanel;

// Style here:
const speedDialStyle: React.CSSProperties = {
	zIndex: 1,
	bottom: 16,
	right: 16,
	position: 'fixed',
};
