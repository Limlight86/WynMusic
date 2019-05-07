import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"
import Navbar from '../components/Navbar'

const Home = () => {
  return(
    <div id="home">
    <div className="home">
      <Navbar/>
      <h1 className='welcomeText'>Welcome to <span className='page'>WynMusic</span></h1>
      <h3 className='introduction'>Track and Explore your Record Collection today!</h3>

      <Link to="/Collection"><button className="button">Go To Collection</button></Link>
    </div>
    </div>
  )
 }

export default Home