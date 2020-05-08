import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import BusinessList from './components/BusinessList';
import Business from './components/Business';
import NoMatch from './components/NoMatch';

const App = () => (
    <>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path='/businesslist' component={BusinessList} />
        <Route path='/business' component={Business} />
        <Route component={NoMatch} />
      </Switch>
    </>
)

export default App;
