import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return(
    <>
        <nav className='navbar'>
          <span className="logo">WM</span>
          <span id="nav-links">
            <Link to="/" className='link'>Home</Link> | 
            <Link to="/collection" className='link'>Collection</Link> |
            <Link to="/search" className='link'>Search</Link> | 
            <Link to="/contact" className='link'>Contact</Link>
          </span>
        </nav>
    </>
  )
}

export default Navbar
