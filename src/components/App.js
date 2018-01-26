import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// Layout
import Header from './header';
import FooterWrapper from './footer';
// Pages
import Home from './Home';
import PageExample1 from './PageExample1';
import PageExample2 from './PageExample2';
// Auth
import Login from './Login';
// Relay examples
import CreateLink from './CreateLink';
import LinkListPage from './LinkListPage';

class App extends Component {
  render() {
    return (
      <div className="boxx-wrapper">
        <Header />
        <main role="main">
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/example1" component={PageExample1} />
            <Route exact path="/example2" component={PageExample2} />

            <Route exact path="/login" component={Login} />
            <Route exact path="/Links" component={LinkListPage} />
            <Route exact path="/create" component={CreateLink} />
          </Switch>
        </main>
        <FooterWrapper />
      </div>
    );
  }
}

export default App;
