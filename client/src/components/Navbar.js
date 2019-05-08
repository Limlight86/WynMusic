import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = props => {
  console.log(props.currentPath)
  return(
    <nav className='navbar'>
      <span className="logo">WM</span>
      <span className="nav-links">
        <Link to="/" className={`link ${props.currentPath === '/' ? 'active' : '' }`}>
          Home
        </Link> |
        <Link to="/collection" className={`link ${props.currentPath === '/collection' ? 'active' : '' }`}>
          Collection
        </Link> |
        <Link to="/search" className={`link ${props.currentPath === '/search' ? 'active' : '' }`}>
          Search
        </Link> |
        <Link to="/contact" className={`link ${props.currentPath === '/contact' ? 'active' : '' }`}>
          Contact
        </Link>
      </span>
    </nav>
  )
}

export default Navbar
