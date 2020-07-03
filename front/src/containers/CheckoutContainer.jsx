import React, { Component } from "react";
import Checkout from "../components/Checkout";
import { withRouter } from "react-router-dom";
import { createUser } from "../redux/actions/userActions";
import { connect } from "react-redux";

class CheckoutContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            ID: '',
            address: '',
            phoneNumber: '',
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
        this.props.createUser(
            this.state.name,
            this.state.ID,
            this.state.address,
            this.state.phoneNumber,
            this.state.email,
        )
        alert('Make sure you fill all inputs and then click on "Existing Costumer"');
    }

    render() {
        return (
            <Checkout
                products={this.props.products}
                inputChange={this.inputChange}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}

const matchDispatchToProps = dispatch => {
    return {
        createUser: (name, ID, address, phoneNumber, email) => dispatch(createUser(name, ID, address, phoneNumber, email))
    };
};

const mapStateToProps = (state) => {
    return {
        products: state.cart.products
    };
};

export default withRouter(connect(
    mapStateToProps,
    matchDispatchToProps
)(CheckoutContainer));