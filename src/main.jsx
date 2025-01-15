import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CointextProvider from './Context/Cointext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <CointextProvider>
      <App />
    </CointextProvider>
    </BrowserRouter>
  
  </React.StrictMode>,
)
