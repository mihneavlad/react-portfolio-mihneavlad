import React, {Fragment} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => (
  <footer class="footer">
    <div class="container">
      <p class="text-center text-footer">
        <Fragment>
          <span className="fa-icons fa-2x"><FontAwesomeIcon icon={faFacebookSquare} /></span>
          <span className="fa-icons fa-2x"><FontAwesomeIcon icon={faTwitterSquare} /></span>
          <span className="fa-icons fa-2x"><FontAwesomeIcon icon={faInstagram} /></span>
          <span className="fa-icons fa-2x"><FontAwesomeIcon icon={faGithubSquare} /></span>
        </Fragment>
      </p>
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
