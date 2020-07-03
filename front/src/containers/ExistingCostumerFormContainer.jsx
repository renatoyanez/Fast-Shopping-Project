import React, { Component } from "react";
import ExistingCostumerForm from "../components/ExistingCostumerForm";
import { withRouter } from "react-router-dom";
import { fetchUser } from "../redux/actions/userActions";
import { connect } from "react-redux";

class ExistingCostumerFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            error: false
        };
        this.inputChange = this.inputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    inputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.fetchUser(this.state)
    }
   

    render() {
        return (
            <ExistingCostumerForm
                
                user={this.props.user}
                inputChange={this.inputChange}
                handleSubmit={this.handleSubmit}
            />
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
        fetchUser: email => dispatch(fetchUser(email)),
      
    };
};

export default withRouter(connect(
    mapStateToProps,
    matchDispatchToProps
)(ExistingCostumerFormContainer));