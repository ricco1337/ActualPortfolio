import React, {Component} from 'react';
import '../portfolio.css';
import {Link} from 'react-router-dom';
import nikeImg1 from '../assets/nikehome.png';
import nikeImg2 from '../assets/nikemen.png';
import nikeImg3 from '../assets/nikewomen.png';

class NikeExample extends Component {
  render() {
    return (
      <div className='container'>
        <div className='nike-examples'>
          <h2 className='portfolio-example-header'>NIKE CLONE
          </h2>
          <p className='sistema-caption'>HTML, CSS, Javascript, Jquery, React</p>
          <div className='sistema-screenshots'>
            <ul>
              <li className='screen-links'>
                <a href='/'><img src={nikeImg1} className='screen-img img-responsive' alt='sistema1'/></a></li>
                <li className='screen-links'>
                  <a href='/'><img src={nikeImg2} className='screen-img img-responsive' alt='sistema2'/></a></li>
                  <li className='screen-links'>
                    <a href='/'><img src={nikeImg3} className='screen-img img-responsive' alt='sistema3'/></a></li>
                </ul>
              </div>
            </div>
          </div>
        )
      }
    }
  export default NikeExample;
