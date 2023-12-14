import App from './App';
import React from 'react';
import { store } from './app/store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { persistStore } from 'redux-persist';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { PersistGate } from 'redux-persist/integration/react';

let persistor = persistStore(store);
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<BrowserRouter>
					<PersistGate persistor={persistor}>
						<App />
					</PersistGate>
				</BrowserRouter>
			</Provider>
		</QueryClientProvider>
	</React.StrictMode>
);
