import React, { Component } from 'react';
import LinkListPage from './LinkListPage';
import logo from '../img/logo.svg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to relsssoads.
        </p>
        <LinkListPage />
      </div>
    );
  }
}

export default App;
