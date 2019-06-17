import React from 'react';
import SummaryProject from './SummaryProject';
import {Link} from 'react-router-dom';

const ListProject = ({projects}) => {
    return(
        <div className="project-list section">
            {
                projects && projects.map(project => {
                    return (
                        <Link to={'/project/'+project.id} key={project.id}>
                            <SummaryProject project={project} />
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default ListProject;