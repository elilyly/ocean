import React from 'react';
import javascript from  './Images/javascript.png';
import react from  './Images/react.png';
import git from  './Images/git.png';
import html from  './Images/html.png';
import css from  './Images/css.png';
import webpack from  './Images/webpack.png';
import uxresearch from  './Images/uxresearch.png';
import angular from  './Images/angular.png';
import red from  './Images/red.png';
import yellow from  './Images/yellow.png';
import green from  './Images/green.png';


const SkillsModal = ({ isShowing, hide }) => {
  return (
    isShowing ?
      <React.Fragment>
      <div className="modal-overlay"/>

            <div className="modal">
                <div className="modal-header">
                  <div className="closebtn" onClick={hide}>
                    <img src={red}/>
                    <img src={yellow}/>
                    <img src={green}/>
                  </div>
                </div>
              <div className="skill-container">
                <ul className="skills-list">
                    <li><img src={javascript} className="skillIcon" />JS</li>
                    <li><img src={react} className="skillIcon" />React</li>
                    <li><img src={git} className="skillIcon" />Git</li>
                    <li><img src={html} className="skillIcon" />HTML</li>
                    <li><img src={css} className="skillIcon" />CSS/SCSS</li>
                    <li><img src={webpack} className="skillIcon" />Webpack</li>
                    <li><img src={uxresearch} className="skillIcon" />UX Research</li>
                    <li><img src={angular} className="skillIcon" />AngularJS</li>
                  </ul>
              </div>
          </div>
      </React.Fragment>
    : null
  );
}

export default SkillsModal;
