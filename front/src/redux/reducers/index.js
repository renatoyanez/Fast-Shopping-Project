import { combineReducers } from 'redux';
import productsReducers from './productsReducers';
import cartReducers from './cartReducers';
import userReducers from './userReducers'

export default combineReducers({
	products: productsReducers,
	cart: cartReducers,
    user: userReducers
});

