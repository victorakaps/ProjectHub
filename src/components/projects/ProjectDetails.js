import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
import { deleteProject } from "../../store/actions/projectActions";
import { Icon } from '@iconify/react';
import trashcanIcon from '@iconify/icons-octicon/trashcan';

class ProjectDetails extends Component {
  handleDelete = (e) => {
    const { id } = this.props;
    e.preventDefault();
    this.props.deleteProject(id);
    this.props.history.push('/')
  };
  render() {
    const { project, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    if (project) {
      return (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{project.title}</span>
              <p>{project.content}</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <div>
                Posted By {project.authorFirstName} {project.authorLastName}
                <Icon icon={trashcanIcon} color="red" className="right delete-btn" width="30px" onClick={this.handleDelete} />
              </div>
              <div>{moment(project.createdAt.toDate()).calendar()}</div>
            </div>
            
          </div>
        </div>
      );
    } else {
      return (
        <div className="container center">
          <p>Loading Project...</p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    id: id,
    project: project,
    auth: state.firebase.auth,
  };
};

const mapDistpacthToProps = (dispatch) => {
  return {
    deleteProject: (id) => dispatch(deleteProject(id)),
  };
};

export default compose(
  connect(mapStateToProps, mapDistpacthToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);

