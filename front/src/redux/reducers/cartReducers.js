import { ADD_PRODUCT_CART, FETCH_SINGLE_PRODUCT, DELETE_SINGLE_PRODUCT } from '../utils/constants';

const initialState = {
	productsCart: [],
	products: []
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCT_CART: {
			return Object.assign({}, state, { productsCart: [ ...state.productsCart, action.productsCart ] });
		}
		case FETCH_SINGLE_PRODUCT: {
			return Object.assign({}, state, { products: [ ...state.products, action.products ] });
		}
		case DELETE_SINGLE_PRODUCT: {
			let index = state.products.findIndex((product) => product.id == action.products.id);
			const selectedProduct = state.products[index];
			state.products.splice(index, 1);
			console.log(state, 'STATE REMOVEEE');
			return Object.assign({}, state, {
				products: [ ...state.products ]
			});
		}
		default:
			return state;
	}
};
