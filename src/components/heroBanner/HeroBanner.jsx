import React from 'react'
import './style.scss'
import { IoLogoInstagram,IoLogoGithub,IoLogoLinkedin,IoLogoTwitter, IoLogoFacebook } from "react-icons/io5";
import { BsDownload } from "react-icons/bs";
import Type from '../type/Type';
import { motion } from 'framer-motion';


const HeroBanner = ({mode}) => {

  const socialMediaLinks = [
    { icon: <IoLogoGithub />, url: 'https://www.github.com/sri766'},
    { icon: <IoLogoLinkedin />, url: 'https://www.linkedin.com/in/srisanth-seth-51b54b225/' },
    { icon: <IoLogoTwitter />, url: 'https://twitter.com/SrisanthSeth' },
    { icon: <IoLogoInstagram />, url: 'https://www.instagram.com/sri_santh._/' },
    { icon: <IoLogoFacebook />, url: 'https://www.facebook.com/srisanth.seth' },
  ];
  

  return (
    <div className={`home_container ${mode === 'light' ? 'light-mode' : ''}`}>
        <motion.div 
          initial={{opacity: 0, y: 15}} 
          animate={{opacity: 1 ,y: 0}}
          transition={{
            duration: 1.5,
            ease: 'easeInOut'
          }}
        className="home_img" >
          <img rel="preload" src="./assets/srisanth.webp" alt="srisanth" />
        </motion.div>
        <motion.h1 
          initial={{opacity: 0, y: 15}} 
          animate={{opacity: 1 ,y: 0}}
          transition={{
            duration: 1.5,
            ease: 'easeInOut'
          }}
        className='home_title'>Hi, I am Srisanth Seth</motion.h1>
        <Type mode={mode}/>

        <a className='home_button' target="_blank" rel="noopener noreferrer" href='https://drive.google.com/file/d/10i-mq64Kdnj9YHj20JsYlvKMuTBFKamM/view?usp=sharing'>
          {<BsDownload />}Resume
        </a>

        <div className={`backdrop_img ${mode === 'light' ? 'light-mode' : ''}`}>
          <img src={
            mode === 'light' ? './assets/bg-light.svg' : './assets/bg.svg'
          } alt='bg'/>
        </div>
        <div className="socials">
          <ul>
            {socialMediaLinks.map((socialMedia, index) => (
              <motion.li 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{
                  duration: 1.3,
                  ease: "easeInOut",
                  delay: 1.3 + index * 0.1
                }}
              key={index}>
                <a href={socialMedia.url} target="_blank" rel="noopener noreferrer">
                  {socialMedia.icon}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="blur_container"></div>
    </div>
  )
}

export default HeroBanner
