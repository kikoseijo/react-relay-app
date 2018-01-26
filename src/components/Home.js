import React, { Component } from 'react';
import Jumbotron from './Jumbotron';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <div className="album py-5 bg-light">
          <div className="container">IM the body of the home.</div>
        </div>
      </div>
    );
  }
}
