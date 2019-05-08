import './Contact.css'
import React from 'react'
import Navbar from '../components/Navbar'
const Contact = (props) => {
    return(
      
      <div id="contact">
        <Navbar currentPath={props.match.path}/>
        <h1 className='welcomeText'><span className='page'>Contact page</span></h1>
        <div className="name">
          <label to="input">Full Name</label>
          <input type="text" className="input"></input>
        </div>
      </div>
    )
  }
  
  
  export default Contact
