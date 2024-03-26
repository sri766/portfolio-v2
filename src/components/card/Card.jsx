import React from 'react';
import './style.scss';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Card = ({ mode, projects }) => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <FaArrowCircleRight />,
    prevArrow: <FaArrowCircleLeft  />,
  };

  return (
    <div className={`container ${mode === 'light' ? 'light-mode' : ''}`}>
      <h1 className="title"
      >
        😎 Featured Projects
      </h1>
      <Slider {...settings}>
        {projects?.map((item) => (
          <div className="card_container" key={item.title}>
            <div className="left">
              <img src={item.image} alt="" />
            </div>
            <div className="right">
              <div className="card_title">
                <h1>{item.title}</h1>
              </div>
              <div className="card_subtitle">
                <h4>{item.subtitle}</h4>
              </div>
              <div className="card_link_github">
                <a href={item.link}>
                  <FaExternalLinkAlt /> {
                    item.blog === 'true' ? "Read More" : "Visit"
                  }
                </a>
                {item.blog ==='false'? (<a href={item.github}>
                  <FaCode /> Github
                </a>):
                ''}
              </div>
              <div className="card_desc">
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Card;
