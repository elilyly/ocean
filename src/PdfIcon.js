import React from 'react';
import pdfIcon from  './Images/pdfIcon.png';
import {NavLink} from 'react-router-dom';

const PdfIcon = (props) => {
  const {
    onStart
  } = props;

  return (
    <NavLink className="nav-menu__link" to="/resume">
    <div className="pdf-container" onMouseDown={props.onStart}>

        <img alt="pdf" src={pdfIcon} className="pdfIcon"  />

      {props.children}
    </div>
      </NavLink>
  );
}

export default PdfIcon;
