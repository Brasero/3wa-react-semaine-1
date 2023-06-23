import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import OutgoingContextProvider from "./utils/context/OutgoingContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <OutgoingContextProvider>
            <App />
        </OutgoingContextProvider>
  </React.StrictMode>,
)
