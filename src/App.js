import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import BusinessDetails from './components/BusinessDetails';

const App = () => (
    <>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path='/business' component={BusinessDetails} />
        <Route component={NoMatch} />
      </Switch>
    </>
)

export default App;
