import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const JumbotronExample = props => {
  return (
    <Jumbotron className="jumbotron text-center">
      <Container>
        <h1 className="jumbotron-heading">React + Relay Modern</h1>
        <p className="lead text-muted">
          This is a <strong>Demo Boilerplate</strong>, you are free to download
          and contribute, its one of the several, but not so many, demo
          applications around, it should allow you to get started with{' '}
          <strong>React + Relay Modern</strong>
        </p>

        <p className="lead pt-4">
          <a
            className="btn btn-primary"
            href="https://github.com/kikoseijo/react-relay-app"
            target="_blank"
          >
            React Client
          </a>&nbsp; &nbsp;
          <a
            className="btn btn-primary"
            href="https://github.com/kikoseijo/lumen-graphql-boilerplate"
            target="_blank"
          >
            Lumen Backend
          </a>
        </p>
      </Container>
    </Jumbotron>
  );
};

export default JumbotronExample;
