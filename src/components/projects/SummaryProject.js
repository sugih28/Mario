import React from 'react';
import {Link} from 'react-router-dom';

const SummaryProject = ({project}) => {
    return(
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey grey-text darken-3">
                <Link to={'/project/' + project.id}>
                    <span className="card-title">{project.title}</span>
                </Link>
                <p>Post By {project.authorName}</p>
                <p className="grey-text">28th June 2019</p>
            </div>
        </div>
    )
}

export default SummaryProject;