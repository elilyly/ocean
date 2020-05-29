import React from 'react';
import trash from  './Images/trash.png';

const Trash = (props) => {

  return (
    <div>
      <img alt="trash" className="trash" src={trash} onMouseDown={props.onStart}/>
      {props.children}
    </div>
  );
}

export default Trash;
