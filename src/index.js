import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from "react-query";

import './index.css';
import App from './components/App';
import "./media/fonts/onest.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(
    <QueryClientProvider client={ queryClient }>
        <App />
    </QueryClientProvider>
);

