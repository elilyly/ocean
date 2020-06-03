import { useState, useEffect } from 'react';

export const useStep = ({
  initialStep = 0,
  steps: stepsProp
})  => {
  const [step, setStep ] = useState(initialStep);
  const steps = stepsProp.length;

  const stepProgress = (i) => {
    setStep((step + i) % steps);
  };

//to do: arrow keys to navigate through carousel
      // const checkKey = (e) => {
      //   console.log("keydown", e.key);
      //   if (!e) return;
      //   // e = e || window.event;
      //   if(e.key === 'ArrowLeft') {
      //     stepProgress(-1)
      //   } else if (e.key === 'ArrowRight') {
      //     stepProgress(1)
      //   }
      // }
      //
      // useEffect(() => {
      //   let keydown = window.addEventListener('keydown', checkKey);
      //   return () => window.removeEventListener(keydown);
      // },[]);

  return {
    step,
    navigation: {
      next: () => stepProgress(1),
      previous: () => stepProgress(-1),
      // onKeyNext: () => checkKey(),
      // onKeyPrevious: () => checkKey()
    }
  };
};

export default useStep;
