import React from 'react'
import './style.scss'
import { blog } from '../../components/data/Data'
import { FaHeart } from 'react-icons/fa'

const Blog = ({mode,blog}) => {
  
  return (
    <div className={`blog ${mode === "light"? "light-mode": ""}`}>
      <div className='title'>
        <h1>Blog</h1>
      </div>
      <div className='blog-container'>
       <h1>Coming Soon🎉</h1>
      </div>
    </div>
  )
}

export default Blog
