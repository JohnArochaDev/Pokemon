import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '../App/App.jsx';

import './index.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <div className="bgM" />
            <div className="bgL" />
            <div className="bgR" />
            <div style={{ zIndex: '1000', position: 'relative' }}>
                <App />
            </div>
        </BrowserRouter>
    </StrictMode>
);
