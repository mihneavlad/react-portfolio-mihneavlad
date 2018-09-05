import React, {Fragment} from 'react';
// import {Link} from "react-router-dom";
import { Card, CardImg, CardTitle, CardText, CardColumns} from 'reactstrap';

import projects from "../projects.json";


const Projects = () => {
  return (
    projects.map((myProject, index) =>
      <Fragment>
        <CardColumns>
          <Card>
            <CardImg
              top width="100%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
              alt="Card image cap"
              body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}
            />
            <CardTitle>{myProject.title}</CardTitle>
            <CardText>{myProject.description}</CardText>
          </Card>
        </CardColumns>
      </Fragment>
    )
  );
};

export default Projects;
