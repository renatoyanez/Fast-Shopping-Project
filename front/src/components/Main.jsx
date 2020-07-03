import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HeaderContainer from '../containers/HeaderContainer';
import CartContainer from '../containers/CartContainer';
import ProductsContainer from '../containers/ProductsContainer';
import CheckoutContainer from '../containers/CheckoutContainer';
import ThanksContainer from '../containers/ThanksContainer';
export default () => {
	return (
		<div>
			<HeaderContainer />
			<Switch>
				<Route exact path="/" component={ProductsContainer} />
				<Route exact path="/cart" component={CartContainer} />
				<Route exact path="/checkout" component={CheckoutContainer} />
				<Route exact path="/thanks" component={ThanksContainer} />
			</Switch>
		</div>
	);
};
