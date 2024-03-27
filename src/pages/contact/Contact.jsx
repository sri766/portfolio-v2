import React from 'react'
import './style.scss'
import { ThemeContext } from '../../Context';
import { useContext } from 'react';

const Contact = () => {
  const {mode} = useContext(ThemeContext)
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
              id="message" 
              cols="30" 
              rows="10"
              placeholder='Write your message here!'
              required
            ></textarea>
            <button type='submit'>POST</button>
          </form>
    </div>
  )
}

export default Contact
