import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './about.css';
import Skills from './aboutComponents/skills';
import Bio from './aboutComponents/bio';
import linked from './assets/linkedin2.png';
import github from './assets/github2.png';


class AboutPage extends Component {
  render() {
    return (
      <div>
      <ul className='navbar-links'>
    <li><Link to='/home' className="link-nav" >Home</Link></li>
      <li><Link to='/resume' className="link-nav" >Resume</Link></li>
        <li><Link to='/portfolio' className="link-nav" >Portfolio</Link></li>
          <li><Link to='/about' className="link-nav" >About</Link></li>
    </ul>
    <Bio />
    <Skills />
      <div className='about-line'></div>
      <div className='contact'>
        <h2>Contact</h2>
        <p className='contact-email'><a href="mailto:ricco1337@outlook.com">RICCO1337@OUTLOOK.COM</a></p>
        <p className='contact-number'><a href='tel:360-840-9923'>360-840-9923</a></p>
        <ul className='social'>
          <li className='social-links'>
              <a href='https://www.linkedin.com/in/ricco-hall-6b8218139/'><img src={linked} className='social-img' alt='linkedin'></img></a>
          </li>
          <li className='social-links'>
            <a href='https://github.com/ricco1337'><img src={github} className='social-img' alt='git'></img></a>
          </li>
        </ul>
      </div>
      <div className='white-space'></div>
    </div>
    )
  }
}

export default AboutPage;
