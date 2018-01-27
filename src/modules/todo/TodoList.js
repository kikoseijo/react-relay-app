/**
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only.  Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import { ListGroup, Input, Row, Col } from 'reactstrap';

import MarkAllTodosMutation from './mutations/MarkAllTodosMutation';
import Todo from './Todo';

class TodoList extends React.Component {
  _handleMarkAllChange = e => {
    const complete = e.target.checked;
    MarkAllTodosMutation.commit(
      this.props.relay.environment,
      complete,
      this.props.viewer.todos,
      this.props.viewer
    );
  };
  renderTodos() {
    return this.props.viewer.todos.edges.map(edge => (
      <Todo key={edge.node.id} todo={edge.node} viewer={this.props.viewer} />
    ));
  }
  render() {
    const numTodos = this.props.viewer.totalCount;
    const numCompletedTodos = this.props.viewer.completedCount;
    const numRemainingTodos = this.props.viewer.totalCount - numCompletedTodos;
    return (
      <div>
        <div className="float-left">
          <strong>{numRemainingTodos}</strong> item{numRemainingTodos === 1
            ? ''
            : 's'}{' '}
          left, <em>Double-click to edit a todo</em>
        </div>
        <div className="float-right">
          <Input
            checked={numTodos === numCompletedTodos}
            onChange={this._handleMarkAllChange}
            type="checkbox"
          />
          <label htmlFor="toggle-all">Mark all as complete</label>
        </div>
        <div className="clearfix" />
        <ListGroup>{this.renderTodos()}</ListGroup>
      </div>
    );
  }
}

export default createFragmentContainer(TodoList, {
  viewer: graphql`
    fragment TodoList_viewer on User {
      todos(
        first: 2147483647 # max GraphQLInt
      ) @connection(key: "TodoList_todos") {
        edges {
          node {
            id
            complete
            ...Todo_todo
          }
        }
      }
      id
      totalCount
      completedCount
      ...Todo_viewer
    }
  `
});
