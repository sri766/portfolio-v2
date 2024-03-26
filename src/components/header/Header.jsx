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

      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3
      }
    },
    hidden: {

      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3
      }
    }
  };

  useEffect(() => {

    handleResize();
    console.log("Effect: Initial setup");
  

    window.addEventListener('resize', handleResize);
    console.log("Effect: Event listener added");
  

    return () => {
      window.removeEventListener('resize', handleResize);
      console.log("Effect: Event listener removed");
    };
  }, []);

  useEffect(() => {
    setToggle(false);
  }, [location.pathname]);
  
  const handleResize = () => {
    // console.log("Resizing...", window.innerWidth);
  
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
          <motion.ul 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
              ease: "easeInOut",
              staggerChildren: 2
            }}
          className='content-list'>
            <li key='home'className='content' onClick={()=>navigate('/')}>Home</li>
            <li key='about'className='content' onClick={()=>navigate('/about')}>About</li>
            <li key='blog'className='content' onClick={()=>navigate('/blog')}>Blog</li>
            <li key='skills'className='content' onClick={()=>navigate('/skills')}>Skills</li>
            <li key='projects'className='content' onClick={()=>navigate('/projects')}>Projects</li>
            <li key='contact'className='content' onClick={()=>navigate('/contact')}>Contact</li>
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
          </motion.ul>
        </>
      )}
    </div>
  )
}

export default Header
