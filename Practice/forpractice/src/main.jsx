import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* App component imported from App.jsx and rendered into the root div of index.html */}
  </StrictMode>,
)
