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

import ChangeTodoStatusMutation from './mutations/ChangeTodoStatusMutation';
import RemoveTodoMutation from './mutations/RemoveTodoMutation';
import RenameTodoMutation from './mutations/RenameTodoMutation';
import TextInput from '../../common/TextInput';
import Switch from '../../common/Switch';

import React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import classnames from 'classnames';
import { ListGroupItem, Row, Col } from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/fontawesome-free-solid';

class Todo extends React.Component {
  state = {
    isEditing: false
  };
  _handleCompleteChange = e => {
    const complete = !e.target.checked;
    ChangeTodoStatusMutation.commit(
      this.props.relay.environment,
      complete,
      this.props.todo,
      this.props.viewer
    );
  };
  _handleDestroyClick = () => {
    this._removeTodo();
  };
  _handleLabelDoubleClick = () => {
    this._setEditMode(true);
  };
  _handleTextInputCancel = () => {
    this._setEditMode(false);
  };
  _handleTextInputDelete = () => {
    this._setEditMode(false);
    this._removeTodo();
  };
  _handleTextInputSave = text => {
    this._setEditMode(false);
    RenameTodoMutation.commit(
      this.props.relay.environment,
      text,
      this.props.todo
    );
  };
  _removeTodo() {
    RemoveTodoMutation.commit(
      this.props.relay.environment,
      this.props.todo,
      this.props.viewer
    );
  }
  _setEditMode = shouldEdit => {
    this.setState({ isEditing: shouldEdit });
  };
  renderTextInput() {
    return (
      <TextInput
        className="edit"
        commitOnBlur={true}
        initialValue={this.props.todo.text}
        onCancel={this._handleTextInputCancel}
        onDelete={this._handleTextInputDelete}
        onSave={this._handleTextInputSave}
      />
    );
  }
  render() {
    return (
      <ListGroupItem
        className={classnames({
          completed: this.props.todo.complete,
          editing: this.state.isEditing
        })}
      >
        <Row className="">
          <div style={{ flex: 0 }} className="pl-2">
            <Switch
              on={this.props.todo.complete}
              onClick={this._handleCompleteChange}
            />
          </div>
          <div style={{ flex: 5 }} className="pl-2 pr-2">
            {this.state.isEditing ? (
              this.renderTextInput()
            ) : (
              <label
                class="todo-item-label"
                onDoubleClick={this._handleLabelDoubleClick}
              >
                {this.props.todo.text}
              </label>
            )}
          </div>
          <div style={{ flex: 0 }} className="pr-2">
            <button
              className="destroy btn btn-danger btn-sm float-right"
              onClick={this._handleDestroyClick}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </Row>
      </ListGroupItem>
    );
  }
}

export default createFragmentContainer(Todo, {
  todo: graphql`
    fragment Todo_todo on Todo {
      complete
      id
      text
    }
  `,
  viewer: graphql`
    fragment Todo_viewer on User {
      id
      totalCount
      completedCount
    }
  `
});
