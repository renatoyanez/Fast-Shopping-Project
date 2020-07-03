import React from 'react';
import Thanks from '../components/Thanks';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class ThanksContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <Thanks user={this.props.user} />;
	}
}

const mapStateToProps = (state) => {
	console.log(state, "STATEEE")
	return {
		user: state.user.user
	};
};

export default withRouter(connect(mapStateToProps)(ThanksContainer));
