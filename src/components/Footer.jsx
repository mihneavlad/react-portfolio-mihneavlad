import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => (
  <footer className="footer">
    <div className="container">
      <div className="text-center text-footer">
        <div className="fa-container">
          <span className="fa-icons fa-2x ml-2 mr-2"><FontAwesomeIcon icon={faFacebookSquare} /></span>
          <span className="fa-icons fa-2x ml-2 mr-2"><FontAwesomeIcon icon={faTwitterSquare} /></span>
          <span className="fa-icons fa-2x ml-2 mr-2"><FontAwesomeIcon icon={faInstagram} /></span>
          <span className="fa-icons fa-2x ml-2 mr-2"><FontAwesomeIcon icon={faGithubSquare} /></span>
        </div>
        <h4 className="text-center text-footer copyright">Copyright ©2018 All rights reserved</h4>
      </div>
    </div>
  </footer>
)
//
// {/* <h1 className="display-1">TORR<NavLink to="/" activeClassName="active" className="display-2">
//            <FontAwesomeIcon icon={faBars} /></NavLink>S.</h1> */}

export default Footer;

//
// <footer class="footer">
//    <div class="container">
//      <span class="text-muted">Place sticky footer content here.</span>
//    </div>
//  </footer>
