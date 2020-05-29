import React from 'react';
import aboutMe from  './Images/aboutMe.png';
import useModal from './useModal';
import AboutModal from  './AboutModal.js';

const AboutMe = (props) => {
  const {
    onStart
  } = props;
  const { isShowing, toggle } = useModal();

  return (
    <div className="zoomAbout"
        onMouseDown={onStart}
        onClick={toggle}>

            <img src={aboutMe} className="about-img"/>

            <AboutModal isShowing={isShowing} hide={toggle}/>

            {props.children}
            <figcaption>About</figcaption>

     </div>
  );
}

export default AboutMe;
