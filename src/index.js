import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/App.css';
import './styles/theme.css';
import App from './components/App';
import registerServiceWorker from './constants/registerServiceWorker';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);

registerServiceWorker();
