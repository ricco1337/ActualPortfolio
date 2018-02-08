
import React, {Component} from 'react';
import './home.css';
import About from '../assets/flag.jpg';
import Portfolio from '../assets/boosted.png';
import Resume from '../assets/resume.jpg';
import linked from '../assets/linkedin.png';
import github from '../assets/github.png';
import { Link } from 'react-router-dom';


class HomePage extends Component {
  render() {
    return (
      <div className='container'>
        <div className='home-header'>
          <h1 className='header-name'>RICCO.HALL</h1>
          <div className='home-nav'>
            <ul>
              <li>
                <p className='header-caption'>Web Developer</p>
              </li>
              <li className='home-links'><Link to='/portfolio'><img src={Portfolio} className='home-imgs img-responsive' alt='boosted'/></Link>
                <p className='link-caption'>Portfolio</p>
              </li>
              <li className='home-links'><Link to='/resume'><img src={Resume} className='resume-img img-responsive' alt='resume'/></Link>
                <p className='link-caption'>Resume</p>
              </li>
              <li className='home-links'><Link to='/about'><img src={About} className='about-img img-responsive' alt='flag'/></Link>
                <p className='link-caption'>About</p>
              </li>
            </ul>
          </div>
        </div>
        <div className='line'></div>
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

export default HomePage;
