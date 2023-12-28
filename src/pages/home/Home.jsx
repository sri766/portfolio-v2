import React from 'react'
import './style.scss' 
import HeroBanner from '../../components/heroBanner/HeroBanner'
import Projects from '../projects/Projects'
import Skills from '../skills/Skills'

const Home = ({mode,projects}) => {
  return (
    <div>
      <HeroBanner mode={mode}/>
      <Projects mode={mode} projects={projects}/>
      <Skills mode={mode}/>
    </div>
  )
}

export default Home
