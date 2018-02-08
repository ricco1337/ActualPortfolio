import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import HomePage from './components/home/homeComponents/home';
import PortfolioPage from './components/portfolio/portfolio';
import AboutPage from './components/about/about';
import ResumePage from './components/resume/resume';

ReactDOM.render(
<Router>
  <switch>
  <Route exact path='/' component={HomePage} />
    <Route path='/home' component={HomePage} />
    <Route path='/portfolio' component={PortfolioPage}/>
    <Route path='/about' component={AboutPage} />
    <Route path='/resume' component={ResumePage}/>
    </switch>
    </Router>,
document.getElementById('root'));
