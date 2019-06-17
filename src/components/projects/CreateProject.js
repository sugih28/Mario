import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createProject} from '../../store/actions/projectAction';

export class CreateProject extends Component {
    state = {
        title:null,
        content:null
    }

    changeHandle = (e) => {
        this.setState({
            [e.target.id] : e.target.value,
        })
    }

    submitHandle = (e) => {
        e.preventDefault()
        this.props.createProject(this.state)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitHandle} className="grey darken-3">
                    <h5 className="grey-text">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="emtitleail">Title</label>
                        <input type="text" id="title" onChange={this.changeHandle} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea className="materialize-textarea" id="content" onChange={this.changeHandle} ></textarea>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject)
