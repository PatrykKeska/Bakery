import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import MainPage from '../views/MainPage';
import { HashRouter as Router, Switch, Route,} from 'react-router-dom';
import ContactPage from '../views/ContactPage';
// import GalleryPage from '../views/GalleryPage'; 
import LightboxPage from '../views/LightboxPage';
function Root() {

  return (
  <Router>
  <MainTemplate>
  <Switch>
    <Route exact path='/' component={MainPage} />
    <Route path='/kontakt' component={ContactPage} />
    <Route path='/galeria' component={LightboxPage} />
  </Switch>
  </MainTemplate>
  </Router>


  );
}

export default Root;
