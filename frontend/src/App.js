import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Navigation from './components/shared/Navigation/Navigation';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import IsLoggedIn from './utils/IsLoggedIn';

const PrivateRouter = ({ component: Component, ...rest }) => (
  <Route
    { ...rest }
    render={props =>
      (IsLoggedIn()) ? (
        <Component {...props}></Component>
      ): (
        <Redirect to={{pathname: '/login', state: {from: props.location}}}></Redirect>
      )
    }
    />
);

class App extends Component {

  

  render() {
    return (
      <div className="App">
        <Navigation></Navigation>
        <div className="container">
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path='/login' exact={true} component={Login} />
            <PrivateRouter path='/admin' exact={true} component={Admin} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
