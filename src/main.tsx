import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Navbar} from "./Navbar.tsx";
import {App} from "./App.tsx";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Navbar />
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>,
)
