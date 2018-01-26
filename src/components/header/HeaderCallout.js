import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Collapse,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const headerCallout = props => {
  return (
    <Collapse isOpen={props.isOpen} className="bg-dark" navbar>
      <Container>
        <Row>
          <Col sm="8" md="7" className="py-4">
            <h4 className="text-white">About us</h4>
            <p className="text-muted">
              <strong>Sunnyface.com</strong>, is a software development company
              from Málaga, Spain. We provide quality software based on the cloud
              for local & international companies, providing technology
              solutions with the most{' '}
              <a href="https://sunnyface.com/tecnologia/" target="_blank">
                modern programming languages
              </a>.
            </p>
          </Col>
          <Col sm="4" md={{ size: 'auto', offset: 1 }} className="py-4">
            <h4 className="text-white">Contact</h4>

            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/" className="text-white">
                  new
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/create" className="text-white">
                  submit
                </Link>
              </NavItem>

              <UncontrolledDropdown nav>
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
          </Col>
        </Row>
      </Container>
    </Collapse>
  );
};

export default headerCallout;
