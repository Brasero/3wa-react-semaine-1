import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ListContextProvider from "./utils/context/ListContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ListContextProvider>
        <App />
    </ListContextProvider>
  </React.StrictMode>,
)
