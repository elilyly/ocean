import {  useState } from 'react';

export const useStep = ({
  initialStep = 0,
  steps: stepsProp
})  => {
  const [step, setStep ] = useState(initialStep);
  const steps = stepsProp.length;

  const stepProgress = (i) => {
    setStep((step + steps + i) % steps);
  };


  return {
    step,
    navigation: {
      next: () => stepProgress(1),
      previous: () => stepProgress(-1)
    }
  };
};

export default useStep;
