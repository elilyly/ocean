import React from 'react';
import SkillsModal from './SkillsModal';
import fol from  './Images/fol.png';
import useModal from './useModal';
import { useState } from 'react';

const Skills = (props) => {
  const {
    onStart
  } = props;
  const { isShowing, toggle } = useModal();

  return (

      <div className="folderimg"
          onMouseDown={onStart}
          onClick={toggle}>
            <img src={fol} className="folderIconImg"/>
            <SkillsModal isShowing={isShowing} hide={toggle}/>
            {props.children}
            <figcaption>Skills</figcaption>
      </div>
  );
}

export default Skills;
