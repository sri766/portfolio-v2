import React from 'react'
import './style.scss'
import { IoMdHeart } from "react-icons/io";
import { ThemeContext } from '../../Context';
import { useContext } from 'react';

const Footer = () => {
  const {mode} = useContext(ThemeContext)
  return (
    <div className={`footer ${mode === 'light' ? 'light-mode' : ''}`}>
      <p className='footer_contents'>Made with {<IoMdHeart />} by Srisanth Seth</p>
      <p className='footer_contents'>Version 2.0</p>
    </div>
  )
}

export default Footer
