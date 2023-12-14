import React from 'react';
import { Box } from '@mui/material';

//Large screens:
import Home1st from '../widgets/HomePage/LargeScreen/Home1st';
import Home2nd from '../widgets/HomePage/LargeScreen/Home2nd';
import Home3nd from '../widgets/HomePage/LargeScreen/Home3nd';
import Home4nd from '../widgets/HomePage/LargeScreen/Home4nd';
import Home5nd from '../widgets/HomePage/LargeScreen/Home5nd';
import Home6nd from '../widgets/HomePage/LargeScreen/Home6nd';

//Medium Screens:
import MHome1st from '../widgets/HomePage/MediumScreen/MHome1st';
import MHome3nd from '../widgets/HomePage/MediumScreen/MHome3nd';

//Small Screens:
import SHomePage from '../widgets/HomePage/SmallScreen/SHomePage';
import SHome2nd from '../widgets/HomePage/SmallScreen/SHome2nd';
import SHome3nd from '../widgets/HomePage/SmallScreen/SHome3nd';
import SHome4nd from '../widgets/HomePage/SmallScreen/SHome4nd';
import SHome6nd from '../widgets/HomePage/SmallScreen/SHome6nd';

const HomePage: React.FunctionComponent = () => {
	return (
		<>
			{/* for big screens: */}
			<Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
				<Home1st />
				<Home2nd />
				<Home3nd />
				<Home4nd />
				<Home5nd />
				<Home6nd />
			</Box>

			{/* for medium screens: */}
			<Box sx={{ display: { xs: 'none', sm: 'block', md: 'none' } }}>
				<MHome1st />
				<Home2nd />
				<MHome3nd />
				<Home4nd />
				<Home5nd />
				<Home6nd />
			</Box>

			{/* for small screens: */}
			<Box sx={{ display: { xs: 'block', sm: 'none', md: 'none' } }}>
				<SHomePage />
				<SHome2nd />
				<SHome3nd />
				<SHome4nd />
				<SHome6nd />
			</Box>
		</>
	);
};

export default HomePage;
