import React from 'react';

const FooterWrapper = () => {
  return (
    <footer className="text-muted">
      <div className="container">
        <p className="float-right">
          <a href="#">Back to top</a>
        </p>
        <p>React + Relay Boilerplate ® Jan 2018, customize it for yourself!</p>
        <p>
          Need help? <a href="http://sunnyface.com">Developer webpage</a> or
          read more in{' '}
          <a href="https://github.com/kikoseijo/react-relay-app">Github</a>.
        </p>
      </div>
    </footer>
  );
};

export default FooterWrapper;
