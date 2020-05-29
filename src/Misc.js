import React from 'react';
import fol from  './Images/fol.png';
import useModal from './useModal';
import { useState } from 'react';
import {NavLink} from 'react-router-dom';

const Misc = (props) => {
  const {
    onStart
  } = props;

  return (

    <NavLink className="nav-menu__link" to="/misc" onMouseDown={onStart}>
      <div className="folderimg2">
            <img src={fol} />
            {props.children}
            <figcaption>Misc.</figcaption>
      </div>
    </NavLink>

  );
}

export default Misc;
