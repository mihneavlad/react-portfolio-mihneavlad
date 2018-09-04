import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {Navbar, NavbarToggler, Nav, NavItem, NavLink} from 'reactstrap';


const Header = (props) => (
  <header>
    <div>
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
            <Nav className="m-auto" navbar>
              <NavItem>
                <NavLink exact to="/" activeClassName="active" tag={RRNavLink}>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/about" activeClassName="active" tag={RRNavLink}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/projects" activeClassName="active" tag={RRNavLink}>Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/contact" activeClassName="active" tag={RRNavLink}>Contact</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
  </header>
)

export default Header;
