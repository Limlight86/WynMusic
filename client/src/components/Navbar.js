import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return(
    <>
        <nav className='navbar'>
          <span className="logo">WM</span>
          <span>
            <Link to="/" className='link'>Home</Link> | 
            <Link to="/Collection" className='link'>Collection</Link> |
            <Link to="/Add" className='link'>Search</Link> | 
            <Link to="/Contact" className='link'>Contact</Link>
          </span>
        </nav>
    </>
  )
}

export default Navbar
