import './collection.css'
import React from 'react'
import Navbar from '../components/Navbar'

const Collection = () => {
    return(
      
      <div id="collection">
        <Navbar/>
        <h1 className='welcomeText'>Your <span className='page'>Collection</span></h1>
      </div>
    )
  }
  
  
  export default Collection