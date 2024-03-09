import React from 'react'
import './style.scss'

const Skills = ({mode}) => {

  const Skills = [
    {name:'HTML',icon:'./assets/html.png'},
    {name:'CSS',icon:'./assets/css.png'},
    {name:'Javascript',icon:'./assets/javascript.png'},
    {name:'React',icon:'./assets/react.svg'},
    {name:'Redux',icon:'./assets/redux.png'},
    {name:'Node',icon:'./assets/node.png'},
    {name:'Sass',icon:'./assets/sass.png'},
    {name:'Git',icon:'./assets/git.png'},
    {name:'Python',icon:'./assets/python.png'},
    {name:'Docker',icon:'./assets/docker.png'},
    {name:'Kubernetes',icon:'./assets/kubernetes.png'},
    {name:'Jeninks',icon:'./assets/jenkins.png'},
    {name:'AWS',icon:'./assets/aws.svg'},
    {name:'Figma',icon:'./assets/figma.png'},
    {name:'C++',icon:'./assets/cpp.png'},
  ]
  
  return (
    <div className={`skills_container ${mode === "light" ? "light-mode" : ""}`}>
      <h1>Skills{" "}🚀</h1>
      <div className='skill_items' >
        {
          Skills.map((skill,index) => (
            <div className='skill' key={index}>
              <img src={skill.icon} alt={skill.name}/>
              <p>{skill.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills
