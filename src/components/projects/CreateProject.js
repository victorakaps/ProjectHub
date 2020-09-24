import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createProject } from "../../store/actions/projectActions";

class CreateProject extends Component {
  state = {
    title: "",
    content: "",
  };
  hanleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase(),
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.createProject(this.state);
    this.props.history.push('/')
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="project-color">
          <h5 className="grey-text text-darken-3">Create Project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" autoComplete="off" onChange={this.hanleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.hanleChange}
            ></textarea>
          </div>
          <div className="input-field">
            <button className="btn mypink z-depth-0">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
