import React, { Component } from 'react';
import '../resume.css';
import resumeimg from '../assets/resumeimg.png';
import resumeimg2 from '../assets/resumeimg2.png';


class Resumeimg extends Component {
  render() {
    return (
      <div className='container'>
<div className='resumeimages'>
 <img src={resumeimg} className='img-responsive resumeimage' alt='resume'></img>
 <img src={resumeimg2} className='img-responsive resumeimage' alt='resume2'></img>
</div>



  </div>
    )
  }
}


export default Resumeimg;
