import React, {Component, Fragment} from 'react';
import projects from '../projects.json';


class SingleProject extends Component {
  render() {

    const project_index = this.props.match.params.project_index;
    console.log(project_index);
    const myProject = projects[project_index];
    console.log(myProject);

    return(
      <Fragment>
        <h2>{myProject.title}</h2>
        <img className="img-fluid" src={myProject.imageUrl} alt={myProject.title}/>
        <p>{myProject.description}</p>
      </Fragment>
    )
  }

}

export default SingleProject;
