import React, { Component } from "react";
import OrderSummary from "../components/OrderSummary";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class OrderSummaryContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <OrderSummary products={this.props.products} user={this.props.user}/>
        );
    }
}

const mapStateToProps = (state) => {
	return {
        products: state.cart.products,
        user: state.user.user
	};
};

export default withRouter(connect(
    mapStateToProps
)(OrderSummaryContainer));