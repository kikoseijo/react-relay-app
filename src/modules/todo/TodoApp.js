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
import { Row, Col, FormGroup, Label } from 'reactstrap';

import AddTodoMutation from './mutations/AddTodoMutation';
import TodoList from './TodoList';
import TodoListFooter from './TodoListFooter';
import TextInput from '../../common/TextInput';

class TodoApp extends React.Component {
  _handleTextInputSave = text => {
    AddTodoMutation.commit(
      this.props.relay.environment,
      text,
      this.props.viewer
    );
  };
  render() {
    const hasTodos = this.props.viewer.totalCount > 0;
    return (
      <div className="todoapp">
        <h2>Things TODO</h2>
        <p className="pt-2 pb-3">
          Here you have a full <strong>CRUD</strong> example, you can{' '}
          <strong>create, delete, update</strong>
          status, and batch processing.<br />The source code has been ported
          from{' '}
          <a href="http://github.com/relayjs/relay-examples" target="_blank">
            RelayJS examples
          </a>
          , you can download the <strong>backend code</strong> from{' '}
          <a href="https://github.com/kikoseijo/lumen-graphql-boilerplate">
            Github Repo
          </a>
        </p>
        <hr />
        <Row className="pt-2">
          <Col sm="4">
            <FormGroup>
              <Label for="exampleEmail">Create new todo</Label>
              <TextInput
                autoFocus={true}
                className="new-todo"
                onSave={this._handleTextInputSave}
                placeholder="What needs to be done?"
              />
            </FormGroup>
            {hasTodos && (
              <TodoListFooter
                todos={this.props.viewer.todos}
                viewer={this.props.viewer}
              />
            )}
          </Col>
          <Col sm="8">
            <TodoList viewer={this.props.viewer} />
          </Col>
        </Row>
        {renderTodoCredits()}
      </div>
    );
  }
}

function renderTodoCredits() {
  return (
    <div className="text-center pt-4 pb-5">
      <em>
        <strong>Author note</strong>: This code its been ported from an example
        created by the{' '}
        <a href="https://facebook.github.io/relay/" target="_blank">
          Relay team
        </a>
        <br />Its part of{' '}
        <a href="http://todomvc.com" target="_blank">
          TodoMVC
        </a>
      </em>
    </div>
  );
}

export default createFragmentContainer(TodoApp, {
  viewer: graphql`
    fragment TodoApp_viewer on User {
      id
      totalCount
      ...TodoListFooter_viewer
      ...TodoList_viewer
    }
  `
});
