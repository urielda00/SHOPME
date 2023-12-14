import React from 'react';
import { Box } from '@mui/material';
import { backgroundStyle } from './CreateItem';
import UpdateForm from '../widgets/AllAdmin/UpdateItem/UpdateForm';

const UpdateItem: React.FunctionComponent = () => {
	return (
		<Box sx={backgroundStyle}>
			<UpdateForm />
		</Box>
	);
};
export default UpdateItem;
