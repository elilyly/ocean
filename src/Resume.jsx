import React from 'react';
import resume from  './Images/resume.pdf';

const Resume = () => {
  return (
    <div>
      <embed src={resume} type="application/pdf" width="100%" height="750px" />
    </div>
  );
}

export default Resume;
