import React from 'react';
import { Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';
import HeaderCallout from './HeaderCallout';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <HeaderCallout isOpen={this.state.isOpen} />
        <Navbar color="dark" className="navbar-dark navbar box-shadow">
          <div class="container d-flex justify-content-between">
            <NavbarBrand href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-2"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
              <strong>React + GraphQL Relay</strong>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
          </div>
        </Navbar>
      </div>
    );
  }
}
