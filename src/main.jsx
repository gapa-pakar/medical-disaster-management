import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { DynamicHeightProvider } from './contexts/DynamicHeightContext.jsx' // import the provider
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DynamicHeightProvider>
      <App />
    </DynamicHeightProvider>
  </StrictMode>,
)
