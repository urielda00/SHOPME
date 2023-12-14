//External imports
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';

// Internal Imports:
import './style.css';
import Router from './Router';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import AdminPanel from './components/AdminPanel';
import ScrollToTop from './components/ScrollToTop';
import PopUpOnStart from './widgets/PopUp/PopUpOnStart';
import ContactNavbar from './components/ContactNavbar';

const App = () => {
	const { pathname } = useLocation();
	const [showPopup, setShowPopup] = useState(false);

	// Handle open & close the pop up:
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowPopup(true);
		}, 3000);
		return () => clearTimeout(timer);
	}, []);

	const closePopup = () => {
		setShowPopup(false);
	};
	useEffect(() => {
		if (showPopup) {
			document.body.style.overflow = 'hidden'; // Prevent scrolling
		} else {
			document.body.style.overflow = 'auto'; // Enable scrolling
		}
	}, [showPopup]);

	return (
		<>
			{showPopup && <PopUpOnStart closePopup={closePopup} />}
			<ContactNavbar />
			<NavBar />
			<AdminPanel />
			<Router />
			<ScrollToTop />
			<ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
			{pathname !== '/productsList' ? <Footer /> : <div hidden></div>}
		</>
	);
};

export default App;
