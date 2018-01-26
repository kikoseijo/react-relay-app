import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import environment from '../constants/Environment';

import TodoApp from '../modules/todo/TodoApp';

const Todo = () => {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query TodoQuery {
          viewer {
            ...TodoApp_viewer
          }
        }
      `}
      variables={{}}
      render={({ error, props }) => {
        if (props) {
          return <TodoApp viewer={props.viewer} />;
        } else {
          return <div>Loading</div>;
        }
      }}
    />
  );
};

export default Todo;
