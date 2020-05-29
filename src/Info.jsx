import React from 'react';
import flowerImg from  './Images/flowerImg.jpg';
import me2 from  './Images/me2.JPG';
import doggy from  './Images/doggy.jpg';
import email from  './Images/email.png';
import github from  './Images/github.png';
import linkedin from  './Images/linkedin.png';


const Info = (props) => {
  return (
    <div className="info-container">
      <img  src={doggy} className="flowerImg" />
      <div className="contact-info">
      <a href="mailto:elizabethnich19@gmail.com"  target="_blank" ><img  src={email} className="contact-icon" /></a>
     <a href="https://github.com/elilyly"  target="_blank" ><img  src={github} className="contact-icon" /></a>
     <a href="https://www.linkedin.com/in/eeliz/"  target="_blank" ><img  src={linkedin} className="contact-icon" /></a>
      </div>
    </div>
  );
}

export default Info;
