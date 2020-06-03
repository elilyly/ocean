import React from 'react';
import leftArrow from './Images/leftArrow.png';
import rightArrow from './Images/rightArrow.png';

const Navigation = ({ step, count, next, previous, onKeyNext, onKeyPrevious }) => {
  return (
      <div className="arrows">
        <button onClick={previous}><img className="carousel-arrow" src={leftArrow}/></button>
        <button onClick={next}><img className="carousel-arrow" src={rightArrow}/></button>
      </div>
  );
}

export default Navigation;
