import React from 'react'
import './style.scss'

const Skills = ({mode}) => {

  const Skills = [
    {name:'HTML',icon:'./src/assets/html.png'},
    {name:'CSS',icon:'./src/assets/css.png'},
    {name:'Javascript',icon:'./src/assets/javascript.png'},
    {name:'React',icon:'./src/assets/react.svg'},
    {name:'Redux',icon:'./src/assets/redux.png'},
    {name:'Node',icon:'./src/assets/node.png'},
    {name:'Sass',icon:'./src/assets/sass.png'},
    {name:'Git',icon:'./src/assets/git.png'},
    {name:'Github',icon:'./src/assets/3.png'},
    {name:'Docker',icon:'./src/assets/docker.png'},
    {name:'Kubernetes',icon:'./src/assets/kubernetes.png'},
    {name:'AWS',icon:'./src/assets/aws.svg'},
    {name:'Figma',icon:'./src/assets/figma.png'},
    {name:'C++',icon:'./src/assets/cpp.png'},
  ]
  
  return (
    <div className={`skills_container ${mode === "light" ? "light-mode" : ""}`}>
      <h1>Skills</h1>
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
