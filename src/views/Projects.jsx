import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import { Badge, CardDeck, Col, Card, CardImg, CardTitle, CardText} from 'reactstrap';

import projects from "../projects.json";


const Projects = () => {
  return (
    <Fragment>
      <CardDeck>
        {projects.map((myProject, index) =>
          <Col key={index} sm="4">
            <Card className="mt-4" body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardTitle>{myProject.title}</CardTitle>
              <CardImg
                top width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Card image cap"
                style={{ backgroundColor: '#333', borderColor: '#333' }}
              />
              <CardText>{myProject.description}</CardText>
              <Link className="btn btn-primary" to={`/projects/${index}`}>See project</Link>
              {/* <Button className="btn btn-primary" to={`/projects/${index}`}>See project</Button> */}
            </Card>
            <div className="pill-container card-body">
              {myProject.tags.map(tag => (
                <Badge className="mr-1" key={tag}>{tag}</Badge>
              ))}
            </div>
          </Col>
        )}
  </CardDeck>
</Fragment>
  );
};

export default Projects;
