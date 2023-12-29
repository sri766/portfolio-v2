import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import './style.scss'

const Type = ({mode}) => {
  return (
    <div className={`home_subtitle ${mode==='light'?"light-mode":''}`}>
        <Typewriter className='type'
          words={['A MERN Developer', 'A DevOps Enthusiast', 'A Figma Designer', "BTech in Industrial Design", 'Student @ NIT Rourkela']}
          loop={12}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
  )
}

export default Type