import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Header = (props) => (
  <header>
    <nav pills>
      <NavItem>
        <NavLink exact to="/" activeClassName="active" tag={RRNavLink}>Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact to="/about" activeClassName="active" tag={RRNavLink}>About</NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact to="/contact" activeClassName="active" tag={RRNavLink}>Contact</NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact to="/projects" activeClassName="active" tag={RRNavLink}>Projects</NavLink>
      </NavItem>
    </nav>
  </header>
)

export default Header;
