import React from 'react';
import courage from  './Images/courage.gif';

const Courage = (props) => {

  return (
    <div className="courage-container" >
      <img alt="courage" className="courage" src={courage} onMouseDown={props.onStart}/>
      {props.children}
    </div>
  );
}

export default Courage;
