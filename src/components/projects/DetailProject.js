import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

function DetailProject(props) {
    const {project} = props;
    if(project) {
        return(
            <div className="container section project-detail">
                <div className="card z-depth-0">
                    <div className="card-content grey darken-3">
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action grey darken-3 grey-text text-darken-1">
                        <div>Posted By {project.authorName}</div>
                        <div>28th June 2019</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">Project Loading...</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return {
        project:project   
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects'}
    ])
)(DetailProject);