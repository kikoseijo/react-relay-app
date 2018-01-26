import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';

function Link(props) {
  return (
    <NavItem>
      <NavLink to={props.url} className="nav-link" activeClassName="active">
        {props.linkt}
      </NavLink>
    </NavItem>
  );
}

const MenuItems = props => {
  return (
    <Nav navbar className="mr-auto">
      <Link url="/react-relay-app/example1" linkt="Page 1" />
      <Link url="/react-relay-app/example2" linkt="Page 2" />
      <Link url="/react-relay-app/todo" linkt="Todo" />
      <Link url="/react-relay-app/links" linkt="Links" />
      <Link url="/react-relay-app/create" linkt="Add Link" />
    </Nav>
  );
};

export default MenuItems;
