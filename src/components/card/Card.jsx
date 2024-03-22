import React from 'react';
import './style.scss';
import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Card = ({ mode, projects }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <FaArrowCircleRight />,
    prevArrow: <FaArrowCircleLeft  />,
  };

  return (
    <div className={`container ${mode === 'light' ? 'light-mode' : ''}`}>
      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
      >
        😎 Featured Projects
      </motion.h1>
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
                  <FaExternalLinkAlt /> Visit
                </a>
                <a href={item.github}>
                  <FaCode /> Github
                </a>
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
