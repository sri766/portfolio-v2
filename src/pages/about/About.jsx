import React from 'react'
import './style.scss'


//components
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'


const About = ({mode}) => {

  return (
    <div className={`about_container ${mode === 'light' ? 'light-mode' : ''}`}>
      <div className={`backdrop_img ${mode === 'light' ? 'light-mode' : ''}`}>
          <img src={
            mode === 'light' ? './assets/bg-light.svg' : './assets/bg-about.svg'
          } alt='bg'/>
        </div>
      <ContentWrapper>
        <h1 className='about_title'> 
        👋Hello,How are You?
        </h1>
        <p className='about_desc'>
        Srisanth this side, a pre-final year student in National Insititute Of Technology,Rourkela(India) majoring in Industrial Design. I am a MERN stack Developer and a Devops enthusiast.I aspire to shape modern software. DevOps beckons with its alchemy of continuous integration, delivery, and deployment. Agile's iterative brilliance and microservices' autonomy captivate me. Containerization, CI/CD pipelines, and Infrastructure as Code bewitch with efficiency and automation. Embarking on this journey, curiosity and ardor ignite my quest for knowledge.
        </p>
      </ContentWrapper>
    </div>
  )
}

export default About
