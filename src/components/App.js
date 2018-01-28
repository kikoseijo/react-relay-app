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
import TodoExamplePage from './TodoExamplePage';

class App extends Component {
  render() {
    return (
      <div className="boxx-wrapper">
        <Header />
        <main role="main">
          <Switch>
            <Route
              exact
              path="/react-relay-app/todo"
              component={TodoExamplePage}
            />
            <Route
              exact
              path="/react-relay-app/example1"
              component={PageExample1}
            />
            <Route
              exact
              path="/react-relay-app/example2"
              component={PageExample2}
            />

            <Route exact path="/react-relay-app/login" component={Login} />
            <Route
              exact
              path="/react-relay-app/Links"
              component={LinkListPage}
            />
            <Route
              exact
              path="/react-relay-app/create"
              component={CreateLink}
            />
            <Route path="/react-relay-app" component={Home} />
          </Switch>
        </main>
        <FooterWrapper />
      </div>
    );
  }
}

export default App;
