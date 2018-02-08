import React, {Component} from 'react';
import '../portfolio.css';
import {Link} from 'react-router-dom';
import sistemaImg1 from '../assets/sistema-screenshot1.png';
import sistemaImg2 from '../assets/sistema-screenshot2.png';
import sistemaImg3 from '../assets/sistema-screenshot3.png';


class ElsistemaExample extends Component {
  render() {
    return (
      <div className='container'>
        <div className='sistema-examples'>
          <h2 className='portfolio-example-header'>EL SISTEMA
          </h2>
          <p className='sistema-caption'>HTML, CSS, Javascript, Jquery, React, Node.js, SQL</p>
          <div className='sistema-screenshots'>
            <ul>
              <li className='screen-links'>
                <a href='/'><img src={sistemaImg1} className='screen-img img-responsive' alt='sistema1'/></a></li>
                <li className='screen-links'>
                  <a href='/'><img src={sistemaImg2} className='screen-img img-responsive' alt='sistema2'/></a></li>
                  <li className='screen-links'>
                    <a href='/'><img src={sistemaImg3} className='screen-img img-responsive' alt='sistema3'/></a></li>
                </ul>
              </div>
            </div>
          </div>
        )
      }
    }
  export default ElsistemaExample;
