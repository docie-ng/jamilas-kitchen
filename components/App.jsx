import React from 'react';
import { Routes, Route, useRoutes, BrowserRouter as Router, Link } from 'react-router-dom'

import Nav from './Nav'
import Menu from './Menu'


function AppWrapper () {
  return (
    <>
    <Nav/>
    <h1 className='heading'>Welcome to Jamila's Kitchen</h1>
    <Router>
      <Routes>
      <Route path="/menu" component={<Menu />}>Menu</Route>
      </Routes>
    </Router>
    </>
  )
}



export default AppWrapper