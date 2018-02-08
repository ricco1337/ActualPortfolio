import React, { Component } from 'react';
import '../about.css';
import css from '../assets/css3-blk.png';
import html from '../assets/html5-blk.png';
import javascript from '../assets/javascript-blk.png';
import angular from '../assets/angular-color-blk.png';
import node from '../assets/nodejs-Logo-blk.png';
import react from '../assets/React.js_logo-blk.png';
import sass from '../assets/sass-blu.png';





class Skills extends Component {
  render() {
    return (
      <div className='container'>
     <h1 className='skills-header'>SKILLS</h1>
     <ul className='skills-icons'>
       <li className='skills-icon'><img src={css}  className='skill-img img-responsive'  alt='skills'></img></li>
         <li className='skills-icon'><img src={html} className='skill-img img-responsive' alt='skills'></img></li>

           <li className='skills-icon'><img src={javascript}  className='skill-img img-responsive' alt='skills'></img></li>

             <li className='skills-icon'><img src={angular}  className='skill-img img-responsive' alt='skills'></img></li>

               <li className='skills-icon'><img src={node}  className='skill-img img-responsive' alt='skills'></img></li>

                 <li className='skills-icon'><img src={react}  className='skill-img img-responsive' alt='skills'></img></li>

                     <li className='skills-icon'><img src={sass}  className='skill-img img-responsive' alt='skills'></img></li>

     </ul>
     <div className='skills-list'>

         <div className='col-md-2'>
           <div className='row'>
           <ul className='skill-list'>
             <li className='skillset'>HTML</li>
             <li className='skillset'>CSS</li>
             <li className='skillset'>SCSS</li>
           </ul>
         </div>
       </div>

         <div className='col-md-2'>
           <div className='row'>
           <ul className='skill-list'>
             <li className='skillset'>BOOTSTRAP</li>
             <li className='skillset'>ANGULAR</li>
             <li className='skillset'>REACT</li>
           </ul>
         </div>
       </div>

         <div className='col-md-2'>
              <div className='row'>
           <ul className='skill-list'>
             <li className='skillset'>NODE.JS</li>
             <li className='skillset'>JQUERY</li>
             <li className='skillset'>SQL</li>
           </ul>
         </div>
       </div>

         <div className='col-md-2'>
           <div className='row'>
           <ul className='skill-list'>
             <li className='skillset'>GULP</li>
             <li className='skillset'>JAVASCRIPT</li>
             <li className='skillset'>GIT</li>
           </ul>
         </div>
       </div>
     </div>
   </div>

    )
  }
}

export default Skills;
