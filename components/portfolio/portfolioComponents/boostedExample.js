import React, {Component} from 'react';
import '../portfolio.css';
import {Link} from 'react-router-dom';
import screenshot1 from '../assets/boosted-screenshot1.png';
import screenshot2 from '../assets/boosted-screenshot2.png';
import screenshot3 from '../assets/boosted-screenshot3.png';


class BoostedExample extends Component {
  render() {
    return (
      <div className='container'>
        <div>
          <h1 className='portfolio-header'>WEB DEVELOPMENT PORTFOLIO</h1>
          <p className='portfolio-caption'>Some of the tools I use to build pages and sites are: HTML, CSS, Javascript, Jquery, Angular, React, Node.js, SQL, Bootstrap.
            <br/>
            Below is my portfolio which contains sites that I've built from the ground up, as well as working with a UX/UI team and building what they have designed.<br/>
            Thanks so much for checking out what I do. Please enjoy!
          </p>
        </div>
        <div className='boosted-examples'>
          <h2 className='boosted-header'>BOOSTED BOARD WEBSITE CLONE
          </h2>
          <p className='boosted-caption'>HTML, CSS, Javascript, Jquery, Angular, Gulp, Scss, Node.js, SQL</p>
          <div className='boosted-screenshots'>
            <ul>
              <li className='screen-links'>
                <a href='http://192.241.211.120/#!/boosted'><img src={screenshot1} className='screen-img img-responsive' alt='screenshot1'/></a></li>
                <li className='screen-links'>
                  <a href='http://192.241.211.120/#!/boosted'><img src={screenshot2} className='screen-img img-responsive' alt='screenshot2'/></a></li>
                  <li className='screen-links'>
                    <a href='http://192.241.211.120/#!/boosted'><img src={screenshot3} className='screen-img img-responsive' alt='screenshot3'/></a></li>
                </ul>
              </div>
            </div>
          </div>
        )
      }
    }
  export default BoostedExample;
