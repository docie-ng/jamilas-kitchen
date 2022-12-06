import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
return (
  <>
  <div className='nav-title'>
    <Link to='/'>Jamila's Kitchen</Link>
    <ul className='nav-content'>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
    </div>
  </>
  )
}

export default Nav