import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"

const Home = () => {
  return(
    <div id="home">
      <h1>Hello from the Home Page</h1>
      <button className="search-now"><Link className="search-now" to={`/search`} target="_blank">Search Now!</Link></button>
    </div>
  )
}

export default Home