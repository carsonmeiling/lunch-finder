import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import BusinessList from './components/BusinessList';
import NoMatch from './components/NoMatch';
import BusinessDetails from './components/BusinessDetails';

const App = () => (
    <>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path='/businesslist' component={BusinessList} />
        <Route path='/business' component={BusinessDetails} />
        <Route component={NoMatch} />
      </Switch>
    </>
)

export default App;
