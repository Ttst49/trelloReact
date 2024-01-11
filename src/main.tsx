import React from 'react'
import ReactDOM from 'react-dom/client'
import UserManager from './UserManager.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserManager />
  </React.StrictMode>,
)
