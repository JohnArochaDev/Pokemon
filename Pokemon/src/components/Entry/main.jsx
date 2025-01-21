import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '../App/App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div className='bgM' />
        <div className='bgL' />
        <div className='bgR' />
        <div style={{ zIndex: '1000', position: 'relative' }}>
            <App />
        </div>

    </StrictMode>,
)
