import React from 'react'
import './style.scss'
import { IoDocumentTextOutline,IoLogoInstagram,IoLogoGithub,IoLogoLinkedin,IoLogoTwitter, IoLogoFacebook } from "react-icons/io5";

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
        <div className="home_img">
          <img src="./src/assets/srisanth.jpg" alt="srisanth" />
        </div>
        <h1 className='home_title'>Hi, I am Srisanth Seth</h1>
        <h3 className='home_subtitle'>A DevOps Enthusiast and MERN Stack Developer</h3>
        <button className='home_button'>{<IoDocumentTextOutline />}Resume</button>
        <div className={`backdrop_img ${mode === 'light' ? 'light-mode' : ''}`}>
          <img src={
            mode === 'light' ? './src/assets/bg-light.svg' : './src/assets/bg.jpg'
          } alt='bg'/>
        </div>
        <div className="socials">
        <ul>
        {socialMediaLinks.map((socialMedia, index) => (
          <li key={index}>
            <a href={socialMedia.url} target="_blank" rel="noopener noreferrer">
              {socialMedia.icon}
            </a>
          </li>
        ))}
      </ul>
        </div>
    </div>
  )
}

export default HeroBanner
