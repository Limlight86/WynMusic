import React from 'react'
import Navbar from '../components/Navbar'
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return(
    <div id="home">
    <div className="home">
      <Navbar/>
      <h1 className='welcomeText'>Welcome to <span className='page'>WynMusic</span></h1>
      <h3>?????????</h3>
      <Link to="/Collection"><button className="button">Start Collection</button></Link>
    </div>
    </div>
  )
}


export default Home