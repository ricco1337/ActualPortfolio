import React, { Component } from 'react';
import '../about.css';
import bioImg from '../assets/bioImg.jpg';



class Bio extends Component {
  render() {
    return (
      <div className='container'>

      <h1 className='biography-header'>RICCO HALL</h1>
      <p className='biography-caption'>WEB DEVELOPER</p>

<div className='biography'>
<figure>
<img src={bioImg} className='bio-img img-responsive' alt='flag'></img>
<figcaption>Salt Lake Flats, UT</figcaption>
</figure>
<p className='hello'>HELLO, I'M RICCO HALL.</p>
<p className='bio-paragraph'>A Front End Web Developer focused on elegant design and user experience. <br />I am currently interested in joining a great team that I can grow with and make a difference visually and functionally. <br />I am very eager to learn and progress as a developer. </p>
</div>
    </div>
    )
  }
}

export default Bio;
