import React from 'react';
import Products from '../components/Products';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProducts, fetchProductsByAlpha, fetchProductsByDate, fetchProductsByPrice } from '../redux/actions/productsActions';
import { addProductCart, fetchSingleProduct, dipatchAddCart } from '../redux/actions/cartActions';

class ProductsContainer extends React.Component {
	constructor(props) {
		super(props);
		this.fetchSingleProduct = this.fetchSingleProduct.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleSortByAlpha = this.handleSortByAlpha.bind(this)
		this.handleSortByDate = this.handleSortByDate.bind(this)
		this.handleSortByPrice = this.handleSortByPrice.bind(this)
	}

	componentDidMount() {
		if (!this.props.products.length) this.props.fetchProducts()
	}
	
	fetchSingleProduct(product) {
		return this.props.fetchSingleProduct(product);
	}
	handleRemove(product) {
		return this.props.dipatchAddCart(product);
	}

	handleSortByAlpha() {
		this.props.fetchProductsByAlpha()
	}

	handleSortByDate() {
		this.props.fetchProductsByDate()
	}

	handleSortByPrice() {
		this.props.fetchProductsByPrice()
	}


	render() {
		return (
			<Products
				handleSortByPrice={this.props.fetchProductsByPrice}
				handleSortByDate={this.props.fetchProductsByDate}
				handleSortByAlpha={this.props.fetchProductsByAlpha}
				products={this.props.products}
				fetchSingleProduct={this.props.fetchSingleProduct}
				handleRemove={this.handleRemove}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		products: state.products.products
	};
};

const matchDispatchToProps = (dispatch) => {
	return {
		fetchProducts: () => {
			dispatch(fetchProducts());
		},

		fetchSingleProduct: (item) => {
			return dispatch(fetchSingleProduct(item));
		},

		dipatchAddCart: (product) => dispatch(dipatchAddCart(product)),

		fetchProductsByAlpha: () => dispatch(fetchProductsByAlpha()),

		fetchProductsByDate: () => dispatch(fetchProductsByDate()),

		fetchProductsByPrice: () => dispatch(fetchProductsByPrice()),

	};
};

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(ProductsContainer));
