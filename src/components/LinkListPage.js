import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../constants/Environment';
import LinkList from './LinkList';

const LinkListPageQuery = graphql`
  query LinkListPageQuery {
    id
    name
    users {
      ...LinkList_users
    }
  }
`;

class LinkListPage extends Component {
  render() {
    return (
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
          return <div>Loading</div>;
        }}
      />
    );
  }
}

export default LinkListPage;
