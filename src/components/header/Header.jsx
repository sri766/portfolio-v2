import React,{useState, useEffect} from 'react'
import './style.scss'


//components,icons
import { motion, AnimatePresence} from "framer-motion"
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { useNavigate } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import NavbarItems from './NavItems';


const Header = ({mode,toggleMode}) => {
  const [isToggled, setToggle] = useState(false);
  const [mobileView, setMobileView] = useState(false)
  const navigate = useNavigate()
  
  const navContainer = {
    visible: {
      //x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3
      }
    },
    hidden: {
      //x: -250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3
      }
    }
  };

  useEffect(() => {
    // Initial setup
    handleResize();
    console.log("Effect: Initial setup");
  
    // Listen for window resize events
    window.addEventListener('resize', handleResize);
    console.log("Effect: Event listener added");
  
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      console.log("Effect: Event listener removed");
    };
  }, []);
  
  const handleResize = () => {
    console.log("Resizing...", window.innerWidth);
  
    if (window.innerWidth < 850) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  };
  

  return (
    <div className={`header ${mode === 'light' ? 'light-mode' : ''}`}>
      <div className='logo'>
        <h2 onClick={()=>navigate('/')}>Srisanth</h2>
      </div>
      { mobileView? (
        <>
        <ul className='content-list'>
          <button className={`btn ${mode === 'light' ? 'light-mode' : ''}`} onClick={toggleMode}>
            {mode === 'dark' ? (
              <>
                <CiLight />
              </>
            ) : (
              <>
                <MdDarkMode />
              </>
            )}
          </button> 
          <li><RxHamburgerMenu  className={`hamburger ${mode === "light"? "light-mode" : ""}`} onClick={() => setToggle(!isToggled)}/></li>
        </ul>
        <AnimatePresence>
        {isToggled && (
          <motion.div
            className="navbar"
            initial="hidden"
            animate={isToggled ? "visible" : "hidden"}
            exit="hidden"
            variants={navContainer}
          >
            <NavbarItems className='navList' mode ={mode} isToggled={isToggled} />
          </motion.div>
        )}
        </AnimatePresence>
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
