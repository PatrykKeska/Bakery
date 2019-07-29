import React from 'react';
import MainTemplate from '../templates/MainTemplate';
import MainPage from '../views/MainPage';
import { BrowserRouter, Switch, Route,} from 'react-router-dom';
import ContactPage from '../views/ContactPage';
function Root() {

  return (
  <BrowserRouter>
  <MainTemplate>
  <Switch>
    <Route path='/' exact component={MainPage} />
    <Route path='/kontakt' component={ContactPage} />
  </Switch>
  </MainTemplate>
  </BrowserRouter>


  );
}

export default Root;
