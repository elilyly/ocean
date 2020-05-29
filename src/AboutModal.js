import React from 'react';
import aboutMe from  './Images/aboutMe.png';


const AboutModal = ({ isShowing, hide }) => {
  return (
    isShowing ?
      <React.Fragment>
      <div className="modal-overlay"/>
            <div className="modal-about">

                  <img src={aboutMe} onClick={hide}/>
          </div>
      </React.Fragment>
    : null
  );
}

export default AboutModal;
