import React from 'react'
import './style.scss'
import { IoMdHeart } from "react-icons/io";


const Footer = ({mode}) => {
  return (
    <div className={`footer ${mode === 'light' ? 'light-mode' : ''}`}>
      {/* <h1>Let's Connect</h1>
      <ul className='footer_contents'>
        <li className='content'>Twitter</li>
        <li className='content'>Facebook</li>
        <li className='content'>Instagram</li>
        <li className='content'>LinkedIn</li>
      </ul> */}
      <p>Made with {<IoMdHeart />} by Srisanth Seth</p>
    </div>
  )
}

export default Footer
