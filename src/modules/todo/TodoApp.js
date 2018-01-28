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

import AddTodoMutation from './mutations/AddTodoMutation';
import TodoList from './TodoList';
import TodoListFooter from './TodoListFooter';
import TodoTextInput from '../../common/TextInput';

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
      <div>
        <h2>Things TODO</h2>
        {renderHeader()}

        <section className="todoapp">
          <header className="header">
            <TodoTextInput
              autoFocus={true}
              className="new-todo"
              onSave={this._handleTextInputSave}
              placeholder="What needs to be done?"
            />
          </header>
          <TodoList viewer={this.props.viewer} />
          {hasTodos && (
            <TodoListFooter
              todos={this.props.viewer.todos}
              viewer={this.props.viewer}
            />
          )}
        </section>
        <footer className="info">{renderCredits()}</footer>
      </div>
    );
  }
}

function renderHeader() {
  return (
    <p className="pt-2 pb-3 text-muted">
      Here you have a full <strong>CRUD</strong> example, you can{' '}
      <strong>create, delete, update</strong>
      status, and batch processing.<br />The source code has been ported from{' '}
      <a href="http://github.com/relayjs/relay-examples" target="_blank">
        RelayJS examples
      </a>
      , you can download the <strong>backend code</strong> from{' '}
      <a href="https://github.com/kikoseijo/lumen-graphql-boilerplate">
        Github Repo
      </a>
    </p>
  );
}

function renderCredits() {
  return (
    <div className="credits text-center pt-4 pb-5">
      <em>
        <strong>Author note</strong>: This code its been ported from an example
        created by the{' '}
        <a href="https://facebook.github.io/relay/" target="_blank">
          <strong>Relay team</strong>
        </a>
        <br />Its part of{' '}
        <a href="http://todomvc.com" target="_blank">
          <strong>TodoMVC</strong>
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
