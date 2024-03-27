import React from 'react';
import './style.scss';
import { blog } from '../../components/data/Data';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { ThemeContext } from '../../Context';
import { useContext } from 'react';

const Blog = ()=> {
  const {mode} = useContext(ThemeContext)
  return (
    <section className={`blog-section ${mode === 'light' ? 'light-mode' : ''}`}>
      <div className="container">
        <h1>Blogs</h1>
        <div className="flex-container">
          {blog.map((item, index) => (
            <div key={index} className="blog-card">
              <div className="blog-image">
                <img src={item.coverImage} alt="blog" />
              </div>
              <div className="blog-content">
                <h2 className="blog-title">{item.title}</h2>
                <p className="blog-brief">{item.brief}</p>
                <a href={item.url} className="blog-link">Learn More{" "}<FaExternalLinkAlt /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
