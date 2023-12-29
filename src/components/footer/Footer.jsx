import React from 'react'
import './style.scss'
import { IoMdHeart } from "react-icons/io";


const Footer = ({mode}) => {
  return (
    <div className={`footer ${mode === 'light' ? 'light-mode' : ''}`}>
      <p>Made with {<IoMdHeart />} by Srisanth Seth</p>
      <p>Version 2</p>
    </div>
  )
}

export default Footer
