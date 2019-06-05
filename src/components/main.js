import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './LandingPage';
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import Contact from './Contact';

const Main = () => (
      <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/AboutUs' component={AboutUs} />
          <Route path='/Gallery' component={Gallery} />
          <Route path='/Contact' component={Contact} />
      </Switch>
)


export default Main
