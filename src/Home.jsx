import React from 'react';
import { useState } from 'react';
import DragDrop from './DragDrop';

import useZoom from './useZoom';
import dog from  './Images/dog.jpg';
import trash from  './Images/trash.png';

import nature from  './Images/nature.jpg';
import sky from  './Images/sky.jpg';
import rose from  './Images/rose.jpg';
import gifGrass from  './Images/gifGrass.GIF';
import cdImg from  './Images/cdImg.gif';
import courage from  './Images/courage.gif';
import pdfIcon from  './Images/pdfIcon.png';
import water from  './Images/water.gif';
import fol from  './Images/fol.png';
import folder from  './Images/folder.png';

const Home = () => {
  // <div>
  //   <button className="button-folder" onClick={toggleZoom}>
  //     <img alt="folder" src={folder} className="folder"  />
  //   </button>
  // </div>
  // const { isShowing, toggle } = useModal();
  const { isZoomed, toggleZoom } = useZoom();
  // const { isShowing: isShowingResume, toggle: toggleResume } = useModal();
  // const { isShowing: isShowingSkills, toggle: toggleSkills } = useModal();
  // const { isShowing: isShowingInfo, toggle: toggleInfo } = useModal();
  // <div className="container">
  //   <input type="checkbox" id="zoomCheck" />
  //     <label for="zoomCheck">
  //       <img alt="folder" src={courage} className="cdImg"   style={transform: `translate(${x - radius}px, ${y - radius}px)`}}/>
  //     </label>
  // </div>

  return (
    <div className="homeContent">
      <DragDrop />




  </div>
  );
}

export default Home;
// <div className="skills" onClick={toggle}>
//   <img src={fol} className="folderimg" />
//   <figcaption>Skills</figcaption>
//   <SkillsModal isShowing={isShowing} hide={toggle}/>
// </div>
