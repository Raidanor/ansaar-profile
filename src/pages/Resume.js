import React from 'react';

import resume from '../assets/resume.pdf'

const Blogs = () => {
    return(
      <div class = "nodal">
        <object data={resume} type="application/pdf" width="100%" height="100%" alt="Resume"/>
      </div>
    )
  };
  
  export default Blogs;