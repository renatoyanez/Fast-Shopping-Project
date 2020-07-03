import React from 'react';
import Header from '../components/Header';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <Header products={this.props.products} />;
	}
}

const mapStateToProps = (state) => {
	return {
		products: state.cart.productsCart
	};
};

export default withRouter(connect(mapStateToProps)(HeaderContainer));
