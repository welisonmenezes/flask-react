import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Navigation from './components/shared/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <div className="container">
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
