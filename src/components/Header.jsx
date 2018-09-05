import React, {Fragment} from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {Navbar, NavbarToggler, Nav, NavItem, NavLink} from 'reactstrap';


const Header = (props) => (
  <Fragment>
    <header>
      <div>
          <Navbar light expand="md">
            <NavbarToggler onClick={this.toggle} />
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
          </Navbar>
        </div>
    </header>
    <section className="intro-section">
  		<div className="container text-center">
  			<div className="row">
  				<div className="col-xl-10 offset-xl-1">
  					<h2 className="section-title">I’m a Berlin based <span>software developer</span> with +2 years of experience</h2>
  				</div>
  			</div>
  		</div>
  	</section>
  </Fragment>
)

export default Header;
