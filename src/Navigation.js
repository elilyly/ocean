import React from 'react';
import roseleft from  './Images/rose-icon-left.png';
import roseright from  './Images/rose-icon-right.png';
import leftArrow from  './Images/leftArrow.png';
import rightArrow from  './Images/rightArrow.png';


const Navigation = ({step, count, next, previous}) => {

  return (
      <div className="arrows">
          <button onClick={previous}><img className="carousel-arrow" src={leftArrow}/></button>
          <button onClick={next}><img className="carousel-arrow" src={rightArrow}/></button>
        </div>
  );
}

export default Navigation;
