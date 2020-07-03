import { ADD_PRODUCT_CART, FETCH_SINGLE_PRODUCT, DELETE_SINGLE_PRODUCT } from '../utils/constants';
import { fetchProducts } from './productsActions';
import axios from 'axios';

export const productCartAction = (productsCart) => ({
	type: ADD_PRODUCT_CART,
	productsCart
});
export const singleProductCart = (products) => ({
	type: FETCH_SINGLE_PRODUCT,
	products
});
export const deleteSingleProduct = (products) => ({
	type: DELETE_SINGLE_PRODUCT,
	products
});
/****** Fetches all addProduct *****/
export const dipatchAddCart = (productsCart) => (dispatch, getState) => {
	dispatch(productCartAction(productsCart));
	localStorage.setItem('cart', JSON.stringify(getState().cart.productsCart));
};
export const dispatchRemoveCart = (products) => (dispatch, getState) => {
	console.log(products, 'REMOVIENDOOO');
	dispatch(deleteSingleProduct(products));
	//   sessionStorage.setItem(
	// 	"product",
	// 	JSON.stringify(
	// 	  JSON.parse(sessionStorage.getItem("product")).filter(
	// 		product => product.id !== id
	// 	  )
	// 	)
	//   );
	localStorage.setItem('cart', JSON.stringify(getState().cart.products));
};
export const fetchSingleProduct = (id) => (dispatch) => {
	return axios.get(`/api/cart/${id}`).then((res) => {
		return dispatch(singleProductCart(res.data));
	});
};

export const addProductCart = (productId) => (dispatch) => {
	axios.post(`/api/cart/${productId}`).then((productsCart) => {
		dispatch(productCartAction(productsCart.data));
	});
};
