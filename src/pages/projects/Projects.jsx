import React from 'react'
import  Card  from '../../components/card/Card'


const Projects = ({mode,projects}) => {
  return (
    <Card projects={projects} mode={mode}/>
  )
}

export default Projects
