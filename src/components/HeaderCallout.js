import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { GC_USER_ID, GC_AUTH_TOKEN } from '../constants/constants';

export default class HeaderCallout extends Component {
  render() {
    console.log('props', this.props);
    const userId = localStorage.getItem(GC_USER_ID);
    // const { isOpen } = this.props;
    return (
      <Collapse isOpen={this.props.isOpen} className="bg-dark" navbar>
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-md-7 py-4">
              <h4 class="text-white">About</h4>
              <p class="text-muted">
                Add some information about the album below, the author, or any
                other background context. Make it a few sentences long so folks
                can pick up some informative tidbits. Then, link them off to
                some social networking sites or contact information.
              </p>
            </div>
            <div class="col-sm-4 offset-md-1 py-4">
              <h4 class="text-white">Contact</h4>

              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to="/" className="ml1 no-underline black">
                    new
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/create">submit</Link>
                </NavItem>

                <NavItem>
                  {userId ? (
                    <div
                      className="ml1 pointer black"
                      onClick={() => {
                        localStorage.removeItem(GC_USER_ID);
                        localStorage.removeItem(GC_AUTH_TOKEN);
                        this.props.history.push('/');
                      }}
                    >
                      logout
                    </div>
                  ) : (
                    <Link to="/login" className="ml1 no-underline black">
                      login
                    </Link>
                  )}
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </div>
          </div>
        </div>
      </Collapse>
    );
  }
}
