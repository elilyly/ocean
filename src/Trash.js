import React from 'react';
import trash from  './Images/trash.png';

const Trash = (props) => {
  const {
    onStart
  } = props;

  return (
    <div  onMouseDown={props.onStart}>
      <img alt="trash" className="trash" src={trash}/>
      {props.children}
    </div>
  );
}

export default Trash;
