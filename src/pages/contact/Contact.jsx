import React from 'react'
import './style.scss'


const Contact = ({mode}) => {

  return (
    <div className={`contact ${mode === 'light'? 'light-mode': ''}`}>
      <div className={`backdrop_img ${mode === 'light' ? 'light-mode' : ''}`}>
          <img src={
            mode === 'light' ? './assets/bg-light.svg' : './assets/bg-about.svg'
          } alt='bg'/>
        </div>
          <div className="contact_img">
            {
              mode === 'light' ? (
                <img src="./assets/programmer.gif" alt="illustration" />
              ) : (
                <img src="./assets/illustration.jpg" alt="illustration" />
              )
            }
          </div>
          <form method="POST" className="contact_form" action="https://formspree.io/f/mrgngban">
            <label>Name</label>
            <input 
              type="text" 
              name='Name'
              placeholder='Name'
              required
            />
            <label>Email</label>
            <input 
              type="email" 
              name='Email'
              placeholder='Email'
              required
            />
            <label>Message</label>
            <textarea 
              name="Message" 
              id="" 
              cols="30" 
              rows="10"
              placeholder='Message'
              required
            ></textarea>
            <button type='submit'>Send</button>
          </form>
    </div>
  )
}

export default Contact
