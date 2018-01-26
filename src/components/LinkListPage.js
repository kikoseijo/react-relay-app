import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import { Container } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/fontawesome-free-solid';

import environment from '../constants/Environment';
import LinkList from './LinkList';

const LinkListPageQuery = graphql`
  query LinkListPageQuery {
    users {
      ...LinkList_users
    }
  }
`;

class LinkListPage extends Component {
  render() {
    return (
      <section className="section bg-light">
        <Container>
          <h2>
            Relay example -
            <small className="text-muted">fragment listing</small>
          </h2>
          <p className="lead">
            This example its a simple list of records retrieved from lumen and
            using fragments.
          </p>
          <QueryRenderer
            environment={environment}
            query={LinkListPageQuery}
            render={({ error, props }) => {
              if (error) {
                return (
                  <div>
                    {error.message}
                    <br /> <br />
                    {error.source.operation.text}
                    <br /> <br />
                    {error.source.errors.map(({ message }) => (
                      <div class="alert error">{message}</div>
                    ))}
                  </div>
                );
              } else if (props) {
                console.log('props', props);
                return <LinkList users={props.users} />;
              }
              return (
                <div className="text-center pt-4 pb-5">
                  <FontAwesomeIcon icon={faSpinner} pulse size="5x" />
                  <div className="clearfix pt-2">&nbsp;</div>
                  Loading,...
                </div>
              );
            }}
          />
        </Container>
      </section>
    );
  }
}

export default LinkListPage;
