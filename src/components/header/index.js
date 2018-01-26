import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/fontawesome-free-solid';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Collapse,
  Container,
  NavItem,
  Nav
} from 'reactstrap';
import { GC_USER_ID, GC_AUTH_TOKEN } from '../../constants/constants';

import HeaderCallout from './HeaderCallout';
import MenuItems from './MenuItems';

class HeaderRoot extends React.Component {
  constructor(props) {
    super(props);
    this.toggleCallout = this.toggleCallout.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      isOpenCallout: false,
      isOpenMenu: false
    };
  }

  toggleCallout() {
    this.setState({
      isOpenCallout: !this.state.isOpenCallout
    });
  }
  toggleMenu() {
    this.setState({
      isOpenMenu: !this.state.isOpenMenu
    });
  }

  render() {
    const userId = localStorage.getItem(GC_USER_ID);
    return (
      <header>
        <HeaderCallout isOpen={this.state.isOpenCallout} />
        <Navbar
          color="dark"
          className="navbar-dark navbar box-shadow"
          expand="md"
        >
          <Container className="d-flex justify-content-between">
            <NavbarBrand
              href="/react-relay-app"
              className="m-auto brand-margin"
            >
              <Logo />
              <strong>React + GraphQL Relay</strong>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleMenu} />
            <Collapse isOpen={this.state.isOpenMenu} navbar>
              <MenuItems />
              <Nav navbar className="ml-auto">
                <NavItem>
                  {userId ? (
                    <a
                      href="#log"
                      className="nav-link"
                      onClick={() => {
                        localStorage.removeItem(GC_USER_ID);
                        localStorage.removeItem(GC_AUTH_TOKEN);
                        this.props.history.push('/');
                      }}
                    >
                      logout
                    </a>
                  ) : (
                    <Link to="/react-relay-app/login" className="nav-link">
                      login
                    </Link>
                  )}
                </NavItem>
                <NavItem>
                  <a
                    href="#log"
                    onClick={this.toggleCallout}
                    className="nav-link"
                  >
                    <FontAwesomeIcon icon={faCoffee} />
                  </a>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="20"
      viewBox="0 0 34 20"
      className="icon-logo"
    >
      <g fill="#FFF">
        <path d="M6.41181208,3.21194631 C6.41181208,4.98107383 4.97771812,6.41463087 3.20912752,6.41463087 C1.44,6.41463087 0.00630872483,4.98107383 0.00630872483,3.21194631 C0.00630872483,1.44281879 1.43986577,0.00926174497 3.20899329,0.00926174497 C4.97778523,0.00926174497 6.41181208,1.44281879 6.41181208,3.21194631" />
        <path d="M12.8271141,17.6661074 C10.4613423,17.6661074 8.53677852,15.7416779 8.53677852,13.3759732 C8.53677852,11.0102685 10.4614765,9.08563758 12.8271141,9.08563758 L20.9331544,9.08563758 C22.3302013,9.08563758 23.4669128,7.94885906 23.4669128,6.55167785 C23.4669128,5.15449664 22.3301342,4.01771812 20.9331544,4.01771812 L3.20872483,4.01771812 C2.72369128,4.01771812 2.3304698,3.62442953 2.3304698,3.1395302 C2.3304698,2.65449664 2.72375839,2.26127517 3.20865772,2.26127517 L20.9330201,2.26127517 C23.2987919,2.26127517 25.2231544,4.18597315 25.2231544,6.55161074 C25.2231544,8.91724832 23.2987248,10.841745 20.9330201,10.841745 L12.8269799,10.841745 C11.4296644,10.841745 10.2930201,11.9785235 10.2930201,13.3759732 C10.2930201,14.7730201 11.4297987,15.9097315 12.8269799,15.9097315 L30.7503356,15.9097315 C31.2353691,15.9097315 31.6285906,16.3030201 31.6285906,16.7879195 C31.6285906,17.2728859 31.2354362,17.6661074 30.7504027,17.6661074 L12.8271141,17.6661074 Z" />
        <path d="M27.5479195,16.7880537 C27.5479195,15.0189262 28.9814765,13.5853691 30.750604,13.5853691 C32.5197315,13.5853691 33.9532886,15.0189262 33.9532886,16.7880537 C33.9532886,18.5571812 32.5197315,19.9907383 30.750604,19.9907383 C28.9814765,19.9907383 27.5479195,18.5571812 27.5479195,16.7880537" />
      </g>
    </svg>
  );
}

export default withRouter(HeaderRoot);
