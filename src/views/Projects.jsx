import React, {Fragment} from 'react';
// import {Link} from "react-router-dom";
import { Button, CardDeck, Col, Card, CardImg, CardTitle, CardText} from 'reactstrap';

import projects from "../projects.json";


const Projects = () => {
  return (
    <Fragment>
      <CardDeck>
        {projects.map((myProject, index) =>

          <Col sm="4">
            <Card key={index} body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardTitle>{myProject.title}</CardTitle>
              <CardImg
                top width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Card image cap"
                body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}
              />
              <CardText>{myProject.description}</CardText>
              <Button color="secondary">Check my project!</Button>
            </Card>

          </Col>
        )}
  </CardDeck>
</Fragment>
  );
};

export default Projects;
