import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
//import { BrowserRouter as Router } from 'react-router-dom'

import App from '../components/App'

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)
