import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
function SignedInLink(props) {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
         {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a onClick={props.signOut}>Log Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating mypink">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null,mapDispatchToProps)(SignedInLink);
