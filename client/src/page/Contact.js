import './Contact.css'
import React from 'react'
import Navbar from '../components/Navbar'
const Contact = (props) => {
    return(
      <div id="contact">
        <Navbar currentPath={props.match.path}/>
        <h1 className='contact'>Thank you for visitng <span className='page'>WynMusic!</span> 
        Contact us below.</h1>
        <form action="https://formspree.io/adrianmarimon1@gmail.com" method="POST">
          <div>
            <label htmlFor="name">Your name:  </label>
            <br/>
            <input type="text" name="name" className="name input" autoComplete="off"/>
          </div>
          <div>
            <label htmlFor="email">Your Email:  </label>
            <br/>
            <input type="text" name="email" className="email input" autoComplete="off"/>
          </div>
          <div>
            <label>Your message:  </label>
            <br/>
            <textarea name="yourmessage" className="message input" ></textarea>
          </div>
        <button type="submit" className="submitButton">Send</button>
        <button type="reset" className="resetButton">Reset</button>
        </form>
      </div>
    )
  }

  export default Contact
