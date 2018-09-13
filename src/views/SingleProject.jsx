import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import { Card } from 'reactstrap';
import projects from '../projects.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleLeft, faAngleRight, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';


class SingleProject extends Component {
  render() {

    const project_index = parseInt(this.props.match.params.project_index);
    console.log(project_index);
    const myProject = projects[project_index];
    console.log(projects.length);


    return(
      <Fragment>
        <Card className="container-project d-flex flex-column" body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <h1 className="mx-auto">{myProject.title}</h1>
            <img className="project-thumbnail img-fluid mx-auto" src={myProject.imageUrl} alt={myProject.title}/>
            <p className="m-auto">{myProject.description}</p>


                <div className="container">
                  <div className="text-center text-footer">
                    <div className="fa-container">
                      <Link
                        className="browsing fas fa-angle-double-left fa-3x mr-6"
                        to={`/projects/0`}>
                        <FontAwesomeIcon icon={faAngleDoubleLeft} />
                      </Link>

                      {project_index > 0  ?
                      <Link
                        className="browsing fas fa-angle-left fa-3x mr-6"
                        to={`/projects/${project_index - 1}`}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                      </Link>
                      :
                      <Link
                        className="browsing fas fa-angle-double-left fa-3x mr-6"
                        to={`/projects/0`}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                      </Link>
                       }

                      {project_index < parseInt(projects.length) - 1  ?
                      <Link
                        className="browsing fas fa-angle-left fa-3x mr-6"
                        to={`/projects/${project_index + 1}`}>
                        <FontAwesomeIcon icon={faAngleRight} />
                      </Link>
                      :
                      <Link
                        className="browsing fas fa-angle-double-left fa-3x mr-6"
                        to={`/projects/0`}>
                        <FontAwesomeIcon icon={faAngleRight} />
                      </Link>
                       }


                      <Link
                        className="browsing fas fa-angle-right fa-3x ml-6"
                        to={`/projects/${projects.length - 1}`}>
                        <FontAwesomeIcon icon={faAngleDoubleRight} />
                      </Link>

                    </div>
                  </div>
                </div>



        </Card>
      </Fragment>
    )
  }

}

export default SingleProject;
