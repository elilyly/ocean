import React, { useState, useEffect, useCallback, useRef } from "react";
import courage from  './Images/courage.gif';
import aboutMe from  './Images/aboutMe.png';
import Courage from './Courage';
import AboutMe from './AboutMe';

const Draggable = ({ position }) => {
  const [state, setState] = useState({
    isDragging: false,
    translateX: position.x,
    translateY: position.y,
    imgTop: null,
    imgLeft: null,

  });

  const imgEl = useRef(null);

  useEffect(() => {
    if (imgEl.current) {
      const { left, top } = imgEl.current.getBoundingClientRect();
      setState({...state, imgTop: top, imgLeft: left})
    }
  }, [imgEl])



  // mouse move
  const handleMouseMove = useCallback(
    ({ clientX, clientY }) => {
      if (state.isDragging) {
        setState(prevState => ({
          ...prevState,
          translateX: Math.abs(clientX - prevState.imgLeft),
          translateY: Math.abs(clientY - prevState.imgTop)
        }));
      }
    },
    [state.isDragging]
  );

  // mouse left click release
  const handleMouseUp = useCallback(() => {
    console.log("mouseup");
    if (state.isDragging) {
      setState(prevState => ({
        ...prevState,
        isDragging: false
      }));
    }
  }, [state.isDragging]);

  // mouse left click hold
  const handleMouseDown = useCallback(() => {
    console.log("mousedown")
    setState(prevState => ({
      ...prevState,
      isDragging: true
    }));
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <div>

    <Courage style={{transform: `translate(${state.translateX}px, ${state.translateY}px)`}} onMouseDown={handleMouseDown} ref={imgEl}/>
    <AboutMe style={{transform: `translate(${state.translateX}px, ${state.translateY}px)`}} onMouseDown={handleMouseDown} ref={imgEl}/>

    </div>
  );
};

export default Draggable;
