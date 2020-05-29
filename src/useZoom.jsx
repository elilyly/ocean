import {React, useState} from 'react';

const useZoom = () => {
  const [ isZoomed, setIsZoomed ] = useState(false);
  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };
  return {
    isZoomed,
    toggleZoom
  }
}

export default useZoom;
