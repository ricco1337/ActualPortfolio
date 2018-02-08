import React, { Component } from 'react';
import '../resume.css';
import download from '../assets/DownloadResumeButton12.jpg';


class ResumeHeader extends Component {
  render() {
    return (
      <div className='container'>

      <h1 className='biography-header'>RICCO HALL</h1>
      <p className='biography-caption'>RESUME</p>
  <a href='http://www.super-resume.com/view/20500677'><img src={download} className='img-responsive download-button'alt='download'></img></a>
   <p className='resume-second-caption'> Below is a current resume of my skills, relevant employment history, recent projects that I've completed, and education. <br />Please feel free to click the download button to download to your computer or hit the appropriate social links in the footer section.  Thanks!</p>
    </div>
    )
  }
}

export default ResumeHeader;
