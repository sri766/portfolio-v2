import React from 'react';
import './style.scss';
import { blog } from '../../components/data/Data';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { LuPartyPopper } from 'react-icons/lu';
import "./style.scss";


const Blog = ({mode}) => {
  
  return (
    <div className={`blog ${mode === "light"? "light-mode": ""}`}>
      <h1>Sri's blog{" "}<LuPartyPopper/></h1>
      {blog?.map((item,index)=>{
        return(
          <div className="blog__card" key={index}>
            <div className="blog__card__img">
              <img src={item.coverImage} alt={item.title} />
            </div>
            <div className="blog__contents">
              <div className="blog__title">
                <h2>{item.title}</h2>
              </div>
              <div className="blog__brief">
                <p>{item.brief}</p>
              </div>
              <div className="blog__link">
                <a href={item.url} target="_blank" rel="noreferrer">
                  Read More
                </a>
              </div>
            </div>
          </div>
        )
      })}
      <div className="blog__footer">
        <p>Wanna Read More Blogs...<a href="https://sri766-blog.vercel.app/"><FaExternalLinkAlt /></a></p>
      </div>
    </div>
  )
}

export default Blog
