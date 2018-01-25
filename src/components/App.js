import React, { Component } from 'react';
import CreateLink from './CreateLink';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import LinkListPage from './LinkListPage';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="boxx-wrapper">
        <Header />
        <main role="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/Links" component={LinkListPage} />
            <Route exact path="/create" component={CreateLink} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
