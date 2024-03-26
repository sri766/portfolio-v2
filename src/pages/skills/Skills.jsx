import React from 'react';
import './style.scss';
import { motion } from 'framer-motion';

const Skills = ({ mode }) => {
  
  const skills = [
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
      <h1>Skills 🚀</h1>
      <div className='skill_items' >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className='skill'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          >
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
