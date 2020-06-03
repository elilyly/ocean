import React from 'react';
import Navigation from "./Navigation";
import useStep from "./useStep";

const Carousel = ({ initialStep, images }) => {
  const { step, navigation } =
  useStep({
    initialStep,
    steps: images
  });
  const { src, alt="" } = images[step];


  return (
      <div className="carousel">
        <h2 className="carousel-title">Miscellaneous</h2>
      {images.length ?
          <img alt={alt} src={src} className="carousel-images"/>
          :null}
          <Navigation step={step} count={images.length} {...navigation}/>
      </div>
  );
}

export default Carousel;
