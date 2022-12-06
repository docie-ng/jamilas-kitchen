import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Nav from './Nav'
import Menu from './Menu'
import Home from './Home'
import Contact from './Contact'
import About from './About'


function App () {
  return (
    <>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/about' element={<About/>}>About</Route>
        <Route path='/menu' element={<Menu/>}>Menu</Route>
        <Route path='/contact' element={<Contact/>}>Contact</Route>
      </Routes>
    </>
  )
}

export default App