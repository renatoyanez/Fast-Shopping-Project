import React from "react";
import Main from "../components/Main";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Main/>;
  }
}

export default withRouter(
  connect(null)(MainContainer)
);
