import React, {Fragment} from 'react';
import IntroSection from '../components/IntroSection';
import { Col, Row} from 'reactstrap';

const About = () => (
  <Fragment>
    <IntroSection />
      <Row className="col-10">
      <Col className="col-5 m-auto">
        <div className="text-left">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum dicta, at distinctio aut eaque dolore molestias aperiam tempore, itaque exercitationem magni atque dolorem ipsum omnis porro similique in, praesentium non cumque numquam reiciendis ex cupiditate? Veritatis autem a repellat quisquam officia ipsum ab suscipit, alias nisi vel sunt! Eius, quasi!
          </p>

          <p>Atque quasi praesentium aut saepe eos pariatur excepturi sit nostrum tempora ea, sint ut laboriosam ex aliquid dolorum autem necessitatibus voluptas et quod impedit, repudiandae? At asperiores nulla magnam sit ad in sunt earum vero ipsa ex doloremque tenetur amet error voluptatibus, aperiam expedita similique mollitia, corrupti molestias? Placeat, quod.
          </p>

        </div>
      </Col>
      <Col className="col-5">
        <figure className="pic-frame">
          <img className="d-block mx-auto rounded border border-danger img-fluid profile" 
            src="https://via.placeholder.com/350x450" alt=""/>
        </figure>
      </Col>
    </Row>
  </Fragment>
)

export default About;
