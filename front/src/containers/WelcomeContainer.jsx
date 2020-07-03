import React, { Component } from "react";
import Welcome from "../components/Welcome";
import { connect } from "react-redux";
import { userLogout } from "../redux/actions/userActions";
import { withRouter } from "react-router-dom";



class WelcomeContainer extends Component {
    constructor(props) {
        super(props);
        // this.onLogout = this.onLogout.bind(this);
    }

    // onLogout() {
    //     this.props.logOut();
    // }

    render() {
        return (
            <Welcome onLogout={this.props.userLogout} user={this.props.user} />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user.user
    };
};

const matchDispatchToProps = dispatch => {
    return {
        userLogout: () => dispatch(userLogout())

    };
};



export default withRouter(connect(mapStateToProps, matchDispatchToProps)(WelcomeContainer));