import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    // execute every component twice, only for development mode
    // might surface some errors if they are executed multiple times
    <StrictMode>
        <App />
    </StrictMode>
);