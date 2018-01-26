import React, { Component } from 'react';
import { ListGroup } from 'reactstrap';
import { createFragmentContainer, graphql } from 'react-relay';

import Link from './Link';

class LinkList extends Component {
  render() {
    console.log('this.props', this.props);
    return (
      <ListGroup className="pt-4 pb-5">
        {this.props.users.map(node => {
          return <Link key={node.__id} user={node} />;
        })}
      </ListGroup>
    );
  }
}

export default createFragmentContainer(
  LinkList,
  graphql`
    fragment LinkList_users on User @relay(plural: true) {
      id
      ...Link_user
    }
  `
);
