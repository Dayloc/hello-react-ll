import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import  Layout  from './components/Layout';
import { AppProvider } from "./flux/context.jsx"; // Importa el proveedor

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
    <Layout/>
    </AppProvider>
    
  </React.StrictMode>,
)
