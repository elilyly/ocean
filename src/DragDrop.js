import Courage from './Courage';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Misc from './Misc';
import Trash from './Trash';
import PdfIcon from './PdfIcon';

import React, { useState } from "react";

const DragDrop= () => {
  const [state, setState] = useState({
    icon: null,
    distX: 0,
    distY: 0
  });


  const onStart = (e) => {
    state.icon = e.target;
    state.distX = Math.abs(state.icon.offsetLeft - e.clientX);
    state.distY = Math.abs(state.icon.offsetTop - e.clientY);
    window.addEventListener("mousemove", onMove);
  }


  const onEnd = (e) => {
    if (state.icon) {
      state.icon.style.pointerEvents = "initial";
      state.icon = null;
    }
    window.removeEventListener("mousemove", onMove);
  }

  const onMove = (e) => {
    if (state.icon) {
        state.icon.style.pointerEvents = "none";
        state.icon.style.left = `${e.clientX - state.distX}px`;
        state.icon.style.top = `${e.clientY - state.distY}px`;
    }
  }

    return (
      <div className={'container'}
        onTouchMove={onMove}
        onMouseUp={onEnd}
        onTouchEnd={onEnd}>
        <Courage onStart={onStart} />
        <Skills onStart={onStart} />
        <AboutMe onStart={onStart} />
        <Misc onStart={onStart} />
        <Trash onStart={onStart} />
        <PdfIcon onStart={onStart} />
      </div>
    );

}

export default DragDrop;
