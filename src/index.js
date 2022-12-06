import React from 'react'
import '../server/public/main.css'
import { createRoot } from 'react-dom/client'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '../components/App'

const container = document.getElementById('app')
const root = createRoot(container)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
