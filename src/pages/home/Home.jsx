import React from 'react'
import './style.scss' 
import HeroBanner from '../../components/heroBanner/HeroBanner'
import Projects from '../projects/Projects'
import Skills from '../skills/Skills'
import { ThemeContext } from '../../Context';
import { useContext } from 'react';

const Home = ({projects}) => {

  const {mode} = useContext(ThemeContext)
  return (
    <div>
      <HeroBanner mode={mode}/>
      <Skills mode={mode}/>
      <Projects mode={mode} projects={projects}/>
    </div>
  )
}

export default Home
