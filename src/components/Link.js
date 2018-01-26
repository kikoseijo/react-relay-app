import React, { Component } from 'react';
import { ListGroupItem } from 'reactstrap';

import { createFragmentContainer, graphql } from 'react-relay';

class Link extends Component {
  render() {
    return (
      <ListGroupItem>
        {this.props.user.email} ({this.props.user.name})
      </ListGroupItem>
    );
  }

  _voteForLink = async () => {
    // ... you'll implement this in chapter 6
  };
}

export default createFragmentContainer(
  Link,
  graphql`
    fragment Link_user on User {
      id
      name
      email
    }
  `
);
