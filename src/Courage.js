import React from 'react';
import courage from  './Images/courage.gif';

const Courage = (props) => {
  const {
    onStart
  } = props;

  return (
    <div className="courage-container" onMouseDown={props.onStart}>
      <img alt="courage" className="courage" src={courage} />
      {props.children}
    </div>
  );
}

export default Courage;
