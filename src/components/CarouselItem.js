import React from  'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';

import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = ({ image, name, species, gender, status }) => (
    <div className="carousel-item">
        <img className="carousel-item__img" src={image} alt={name}  />
            <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src={playIcon} alt="Play Icon"/> 
                <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon"/> 
            </div>
            <p className="carousel-item__details--title">{name}</p>
            <p className="carousel-item__details--subtitle">
                {`${species} ${gender} ${status}`}
            </p>
            </div>
  </div>
);

CarouselItem.propTypes = {
    name: PropTypes.string,
    species: PropTypes.string,
    gender: PropTypes.string,
    status: PropTypes.string,
  };

export default  CarouselItem;