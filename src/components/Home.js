import React, { Component } from 'react';
import Jumbotron from './Jumbotron';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <div class="album py-5 bg-light">
          <div class="container">IM the body of the home.</div>
        </div>
      </div>
    );
  }
}
