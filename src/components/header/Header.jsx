import React,{useState, useEffect} from 'react'
import './style.scss'

//components,icons
import { motion } from "framer-motion"
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
import { CiMenuBurger } from 'react-icons/ci';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

const Header = ({mode,toggleMode}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileView, setMobileView] = useState(false)
  const navigate = useNavigate()
  
  const handleResize = () => {
    if(window.innerWidth < 768){
      setMobileView(true)
    }else{
      setMobileView(false)
    }
  }

  useEffect(() => {
    // Initial setup
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`header ${mode === 'light' ? 'light-mode' : ''}`}>
      <div className='logo'>
        <h2 onClick={()=>navigate('/')}>Srisanth</h2>
      </div>
      { mobileView? (
        <>
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
          <CiMenuBurger />
        </>
      ):(
        <>
          <ul className='content-list'>
            <li className='content' onClick={()=>navigate('/')}>Home</li>
            <li className='content' onClick={()=>navigate('/about')}>About</li>
            <li className='content' onClick={()=>navigate('/blog')}>Blog</li>
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
        </>
      )}
    </div>
  )
}

export default Header
