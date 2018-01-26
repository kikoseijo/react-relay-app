import React, { Component } from 'react';
import { Container, Button, Col, FormGroup, Label, Input } from 'reactstrap';

// import CreateLinkMutation from '../mutations/CreateLinkMutation';
import { GC_USER_ID } from '../constants/constants';

class CreateLink extends Component {
  state = {
    description: '',
    url: ''
  };

  render() {
    return (
      <section className="section bg-light">
        <Container>
          <h2>
            Relay example -
            <small className="text-muted">mutation</small>
          </h2>
          <p className="lead">
            This example shows you how to make a mutation using GraphQL Relay
            Modern
          </p>
          <Col sm={{ size: 8, offset: 2 }} className="pt-4 pb-5">
            <FormGroup>
              <Label for="exampleEmail">Link description</Label>
              <Input
                value={this.state.description}
                onChange={e => this.setState({ description: e.target.value })}
                placeholder="A description for the link"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Link URL</Label>
              <Input
                value={this.state.url}
                onChange={e => this.setState({ url: e.target.value })}
                placeholder="The URL for the link"
              />
            </FormGroup>
            <div className="text-center pt-3">
              <Button
                color="primary"
                size="lg"
                onClick={() => this._createLink()}
              >
                Create new link record
              </Button>
            </div>
          </Col>
        </Container>
      </section>
    );
  }

  _createLink = () => {
    const postedById = localStorage.getItem(GC_USER_ID);
    if (!postedById) {
      console.error('No user logged in');
      return;
    }
    // const { description, url } = this.state;
    // CreateLinkMutation(postedById, description, url, () =>
    //   this.props.history.push('/')
    // );
  };
}

export default CreateLink;
