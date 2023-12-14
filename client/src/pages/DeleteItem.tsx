import React from 'react';
import { Box } from '@mui/material';
import { backgroundStyle } from './CreateItem';
import { DeleteForm } from '../widgets/AllAdmin/DeleteItem/DeleteForm';

const DeleteItem: React.FunctionComponent = () => {
	return (
		<Box sx={backgroundStyle}>
			<DeleteForm />
		</Box>
	);
};

export default DeleteItem;