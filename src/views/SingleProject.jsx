import React, {Component, Fragment} from 'react';
import { Card } from 'reactstrap';
import projects from '../projects.json';


class SingleProject extends Component {
  render() {

    const project_index = this.props.match.params.project_index;
    console.log(project_index);
    const myProject = projects[project_index];
    console.log(myProject);

    return(
      <Fragment>
        <Card className="container-project d-flex flex-column" body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <h1 className="mx-auto">{myProject.title}</h1>
            <img className="project-thumbnail img-fluid mx-auto" src={myProject.imageUrl} alt={myProject.title}/>
            <p className="m-auto">{myProject.description}</p>
      </Card>
      </Fragment>
    )
  }

}

export default SingleProject;
