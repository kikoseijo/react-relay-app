import React, { Component } from 'react';
import { createPaginationContainer, graphql } from 'react-relay';

class Feed extends React.Component {
  render() {
    return (
      <div>
        {this.props.user.feed.edges.map(edge => (
          <Story story={edge.node} key={edge.node.id} />
        ))}
        <button onPress={() => this._loadMore()} title="Load More" />
      </div>
    );
  }

  _loadMore() {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return;
    }

    this.props.relay.loadMore(
      10, // Fetch the next 10 feed items
      error => {
        console.log(error);
      }
    );
  }
}

module.exports = createPaginationContainer(
  Feed,
  {
    user: graphql`
      fragment Feed_user on User
        @argumentDefinitions(
          count: { type: "Int", defaultValue: 10 }
          cursor: { type: "ID" }
        ) {
        feed(
          first: $count
          after: $cursor
          orderby: $orderBy # Non-pagination variables
        ) @connection(key: "Feed_feed") {
          edges {
            node {
              id
              ...Story_story
            }
          }
        }
      }
    `
  },
  {
    direction: 'forward',
    getConnectionFromProps(props) {
      return props.user && props.user.feed;
    },
    // This is also the default implementation of `getFragmentVariables` if it isn't provided.
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount
      };
    },
    getVariables(props, { count, cursor }, fragmentVariables) {
      return {
        count,
        cursor,
        orderBy: fragmentVariables.orderBy,
        // userID isn't specified as an @argument for the fragment, but it should be a variable available for the fragment under the query root.
        userID: fragmentVariables.userID
      };
    },
    query: graphql`
      # Pagination query to be fetched upon calling loadMore.
      # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.
      query FeedPaginationQuery($count: Int!, $cursor: ID, $userID: ID!) {
        user: node(id: $userID) {
          ...Feed_user
            @arguments(count: $count, cursor: $cursor, orderBy: $orderBy)
        }
      }
    `
  }
);
