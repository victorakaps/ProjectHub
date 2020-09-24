import React from "react";
import { Link } from "react-router-dom";

import SignedInLink from "./SignedInLink";
import SignedOutLink from "./SignedOutLink";

import { connect } from "react-redux";

function Navbar(props) {
  const { auth, profile } = props;
  const links = auth.uid ? (
    <SignedInLink profile={profile} />
  ) : (
    <SignedOutLink />
  );
  return (
    <nav className="nav-wrapper header">
      <div className="container">
        <Link to="/" className="brand-logo left">
          <div className="my-logo">ProjectHub</div>
        </Link>
        {links}
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
