import React from 'react';
import { useState } from 'react';
import DragDrop from './DragDrop';

import useZoom from './useZoom';


const Home = () => {
  const { isZoomed, toggleZoom } = useZoom();
  return (
    <div className="homeContent">
      <DragDrop />
    </div>
  );
}

export default Home;
