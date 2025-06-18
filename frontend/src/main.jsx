import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './input.css'
import App from './App.jsx'
// just learned this. importing in the curly brackets gets specifically what you're importing
// if there's only one thing in module, then you can just import
// otherwise it will get confused.
import {Toaster} from "react-hot-toast"

import {BrowserRouter} from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster/>
    </BrowserRouter>
    
  </StrictMode>,
)
