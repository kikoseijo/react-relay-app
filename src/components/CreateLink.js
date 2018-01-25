import React, { Component } from 'react';
// import CreateLinkMutation from '../mutations/CreateLinkMutation';
import { GC_USER_ID } from '../constants/constants';

class CreateLink extends Component {
  state = {
    description: '',
    url: ''
  };

  render() {
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={this.state.description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={this.state.url}
            onChange={e => this.setState({ url: e.target.value })}
            type="text"
            placeholder="The URL for the link"
          />
        </div>
        <div className="button" onClick={() => this._createLink()}>
          submit
        </div>

        <p className="text-muted">
          Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.
        </p>
        <p className="text-primary">
          Nullam id dolor id nibh ultricies vehicula ut id elit.
        </p>
        <p className="text-success">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
        <p className="text-info">
          Maecenas sed diam eget risus varius blandit sit amet non magna.
        </p>
        <p className="text-warning">
          Etiam porta sem malesuada magna mollis euismod.
        </p>
        <p className="text-danger">
          Donec ullamcorper nulla non metus auctor fringilla.
        </p>
        <p className="text-white">
          Etiam porta sem malesuada ultricies vehicula.
        </p>
      </div>
    );
  }

  _createLink = () => {
    const postedById = localStorage.getItem(GC_USER_ID);
    if (!postedById) {
      console.error('No user logged in');
      return;
    }
    // const { description, url } = this.state;
    // CreateLinkMutation(postedById, description, url, () =>
    //   this.props.history.push('/')
    // );
  };
}

export default CreateLink;
