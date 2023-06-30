import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query'; 
import { store } from "./app/store";
import { Provider } from "react-redux";
const queryClient = new QueryClient();


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
       <BrowserRouter>
         <App />
       </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);

