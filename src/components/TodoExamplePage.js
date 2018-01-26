import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';
import { Container } from 'reactstrap';

import environment from '../constants/Environment';
import TodoApp from '../modules/todo/TodoApp';

const TodoExamplePage = () => {
  return (
    <section className="section bg-light">
      <Container>
        <QueryRenderer
          environment={environment}
          query={graphql`
            query TodoExamplePageQuery {
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
      </Container>
    </section>
  );
};

export default TodoExamplePage;
