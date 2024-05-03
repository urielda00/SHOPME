import ga4 from 'react-ga4';

const TRACKING_ID = 'G-ZKD4GEZV1E';

export const init = () =>
	ga4.initialize(TRACKING_ID, {
		testMode: false,
	});

export const sendEvent = (name: string) =>
	ga4.event('screen_view', {
		app_name: 'SHOPME',
		screen_name: name,
	});

export const sendPageview = (path: string) =>
	ga4.send({
		hitType: 'pageview',
		page: path,
	});
