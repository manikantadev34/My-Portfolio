import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div className='contact'>
        <h2>Contact Me</h2>
        <form className='contact-form' >
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' placeholder='Enter your name' required />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' placeholder='Enter your email' required />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Message</label>
          <textarea id='message' rows='5' placeholder='Enter your message' required></textarea>
        </div>
        <button type='submit'>Send Message</button>
      </form>   
    </div>
  )
}