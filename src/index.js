import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/styles/marginpadding.css';
import './components/App-1.css'
import './components/App-2.css'
import './index.css'

const root = ReactDOM.createRoot(document.body)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
