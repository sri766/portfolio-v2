import React,{useState} from 'react'
import './style.scss'

//components,icons
import { motion } from "framer-motion"
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useNavigate } from 'react-router-dom'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

const Header = ({mode,toggleMode}) => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  

  return (
    <div className={`header ${mode === 'light' ? 'light-mode' : ''}`}>
      <div className='logo'>
        <h2 onClick={()=>navigate('/')}>Srisanth</h2>
      </div>
      <ul className='content-list'>
        <li className='content' onClick={()=>navigate('/')}>Home</li>
        <li className='content' onClick={()=>navigate('/about')}>About</li>
        <li className='content' onClick={()=>navigate('/Blog')}>Blog</li>
        <li className='content' onClick={()=>navigate('/skills')}>Skills</li>
        <li className='content' onClick={()=>navigate('/projects')}>Projects</li>
        <li className='content' onClick={()=>navigate('/contact')}>Contact</li>
        <button className={`btn ${mode === 'light' ? 'light-mode' : ''}`} onClick={toggleMode}>
        {mode === 'dark' ? (
          <>
            <CiLight />
            Light Mode
          </>
        ) : (
          <>
            <MdDarkMode />
            Dark Mode
          </>
        )}
        </button> 
      </ul>
    </div>
  )
}

export default Header
