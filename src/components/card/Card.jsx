import React from 'react'
import './style.scss'
import { FaCode,FaExternalLinkAlt} from "react-icons/fa";

const Card = ({mode,projects}) => {

  return (
    <div className={`container ${mode==="light"?'light-mode':''}`}>
        <h1 className='title'>Featured Projects</h1>                                             
        <div className={`card`}>
            {projects?.map((item)=>{
                return(
                    <div className='card_container' key={item.title}>
                        <div className='card_img'>
                            <img src={item.image} alt='' />
                        </div>
                        <div className="card_title">
                            <h1>{item.title}</h1>
                        </div>
                        <div className="card_subtitle">
                            <h4>{item.subtitle}</h4>
                        </div>
                        <div className="card_link_github">
                            <a href={item.link}><FaExternalLinkAlt />Visit</a>
                            <a href={item.github}><FaCode />Github</a>
                        </div>
                        <div className='card_desc'>
                            <p>{item.description}</p>
                        </div>
                    </div>)
            })}
        </div>
    </div>
  )
}

export default Card
