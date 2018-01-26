import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';

const JumbotronExample = props => {
  return (
    <Jumbotron className="jumbotron text-center">
      <Container>
        <h1 className="jumbotron-heading">Album example</h1>
        <p className="lead text-muted">
          Something short and leading about the collection below—its contents,
          the creator, etc. Make it short and sweet, but not too short so folks
          don't simply skip over it entirely.
        </p>
        <hr className="my-2" />

        <p className="lead">
          <Button color="primary">Learn More</Button>&nbsp; &nbsp;
          <Button color="secondary">Learn More</Button>
        </p>
      </Container>
    </Jumbotron>
  );
};

export default JumbotronExample;
