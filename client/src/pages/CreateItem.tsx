import React from 'react';
import { Box } from '@mui/material';
import CreateForm from '../widgets/AllAdmin/CreateItemForm/CreateForm';

const CreateItem: React.FunctionComponent = () => {
	return (
		<Box sx={backgroundStyle}>
			<Box sx={{ display: 'flex' }}>
				<CreateForm />
			</Box>
		</Box>
	);
};
export default CreateItem;

export const backgroundStyle = {
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
  backgroundColor: '#ECE8DD',
	height: { md: '88vh', sm: '88vh', xs: '90vh' },
};
