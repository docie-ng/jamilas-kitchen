import React from 'react';
import { Routes, Route, useRoutes, BrowserRouter as Router } from 'react-router-dom'

import Nav from './Nav'

const App = () => {

//   let routes = useRoutes([
//     {path: '/', element: <Home/>},
//     {path: '/menu', element: <Menu/>},  
// ])
//   return routes
}


function AppWrapper () {
  return (
    <>
    <h1 className='heading'>Welcome to Jamila's Kitchen</h1>
    <Router>
      <Nav />
      <App />
    </Router>
    </>
  )
}

export default AppWrapper