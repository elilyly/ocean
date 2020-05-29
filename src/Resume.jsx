import React from 'react';
import myResume from  './Images/myResume.pdf';

const Resume = () => {
  return (
    <div>
      <embed src={myResume} type="application/pdf" width="100%" height="750px" />
    </div>
  );
}

export default Resume;
