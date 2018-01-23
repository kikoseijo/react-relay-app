import React, { Component } from 'react';
import Link from './Link';
import { createFragmentContainer, graphql } from 'react-relay';

class LinkList extends Component {
  render() {
    console.log('this.props', this.props);
    return (
      <div>
        {this.props.users.map(node => {
          return <Link key={node.__id} user={node} />;
        })}
      </div>
    );
  }
}

export default createFragmentContainer(
  LinkList,
  graphql`
    fragment LinkList_users on User @relay(plural: true) {
      ...Link_user
    }
  `
);
