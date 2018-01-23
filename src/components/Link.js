import React, { Component } from 'react';
import { createFragmentContainer, graphql } from 'react-relay';

class Link extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.user.email} ({this.props.user.name})
        </div>
      </div>
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
