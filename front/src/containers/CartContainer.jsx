import React from 'react';
import Cart from '../components/Cart';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
	fetchSingleProduct,
	deleteSingleProduct,
	dipatchAddCart,
	dispatchRemoveCart
} from '../redux/actions/cartActions';

class CartContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			select: 1,
			products: [],
			multiply: []
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSumTotal = this.handleSumTotal.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleRepeat = this.handleRepeat.bind(this);
		// this.funcion = this.funcion.bind(this);

		// this.handleRemove = this.handleRemove.bind(this);
	}
	componentDidMount() {
		if (this.props.products) {
			return this.props.products;
		}
		let cart = JSON.parse(localStorage.getItem('cart '));
	}
	// componentDidUpdate() {
	// 	localStorage.setItem(
	// 		'product',
	// 		JSON.stringify(
	// 			JSON.parse(localStorage.getItem('cart')).filter((product) => {
	// 				console.log(product, 'PRODUCT DID UPDATE');
	// 				return product.id !== id;
	// 			})
	// 		)
	// 	);
	// 	// this.props.dispatchRemoveCart(id);
	// 	// localStorage.setItem(
	// 	// 	'product',
	// 	// 	JSON.stringify(JSON.parse(localStorage.getItem('cart')).filter((product) => product.id !== id))
	// 	// );
	// 	let cart = JSON.parse(localStorage.getItem('cart '));
	// 	console.log(cart, 'CART CONTAINER');
	// }

	handleChange(e, valor) {

		this.setState({ select: e });
	}
	// funcion(e, valor, arr = []) {
	// 	// console.log(valor, 'SOY VALOR');
	// 	// console.log(e, 'SOY E');

	// 	// const multi = e * valor;
	// 	// console.log(multi, 'SOY MULTI');
	// 	// arr.push(multi);
	// 	// console.log("ARR", [...arr])
	// 	// return [...arr]
	// }
	handleRepeat() {
		let { products } = this.props;
		let obj = {};
		for (var i = 0, len = things.length; i < len; i++) obj[things[i]['place']] = things[i];

		things = new Array();
		for (var key in obj) things.push(obj[key]);
	}
	handleSumTotal() {
		let { products } = this.props;
		let arr = [];
		let sumTotal = products.map((val, index) => {
			arr.push(val['price']);
		});

		var totalSum = arr.length > 0 ? `Total: $${arr.reduce((suma, i) => suma + i)}` : '';
		return totalSum;
	}
	handleDelete(product) {
		localStorage.setItem(
			'product',
			JSON.stringify(
				JSON.parse(localStorage.getItem('cart')).filter((product) => {
					return product !== product;
				})
			)
		);
		this.props.dispatchRemoveCart(product);
	}
	// handleRemove(id) {
	// 	console.log(id, 'REMOVEEE');
	// 	this.props.deleteSingleProduct(id);
	// }

	render() {
		console.log(this.state, 'STATE');
		let { products } = this.props;

		var result = products.reduce((unique, o) => {
			if (!unique.some((obj) => obj.id === o.id && obj.name === o.name)) {
				unique.push(o);
			}
			return unique;
		}, []);
		return (
			<Cart
				cartProducts={result}
				handleChange={this.handleChange}
				select={this.state.select}
				handleSum={this.handleSumTotal}
				handleDelete={this.handleDelete}
				multiply={this.state.multiply}
			// funcion={this.funcion}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		products: state.cart.products
	};
};

const matchDispatchToProps = (dispatch) => {
	return {
		fetchSingleProduct: (item) => {
			return dispatch(fetchSingleProduct(item));
		},
		// deleteSingleProduct: (id) => dispatch(deleteSingleProduct(id)),
		dispatchRemoveCart: (product) => dispatch(dispatchRemoveCart(product))
	};
};

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(CartContainer));
