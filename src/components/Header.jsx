import React, {Component, Fragment} from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink} from 'reactstrap';


 class Header extends Component {
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
      <Fragment>
        <header>
          <div>
              <Navbar className="d-flex justify-content-center" light expand="md">
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="m-auto" navbar>
                    <NavItem>
                      <NavLink className="portfolio-li" exact to="/" activeClassName="active" tag={RRNavLink}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="portfolio-li" exact to="/about" activeClassName="active" tag={RRNavLink}>About</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="portfolio-li" exact to="/projects" activeClassName="active" tag={RRNavLink}>Projects</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink className="portfolio-li" exact to="/contact" activeClassName="active" tag={RRNavLink}>Contact</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
        </header>
      </Fragment>
    )
  }
}

export default Header;
