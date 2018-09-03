import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Header = (props) => (
  <header>
    <nav>
      <NavItem>
        <NavLink exact to="/" activeClassName="active" tag={RRNavLink}>Home></NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact to="/" activeClassName="active" tag={RRNavLink}>Home></NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact to="/" activeClassName="active" tag={RRNavLink}>Home></NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact to="/" activeClassName="active" tag={RRNavLink}>Home></NavLink>
      </NavItem>
    </nav>
  </header>
)

export default Header;
