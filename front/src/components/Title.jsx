import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

export default function Title() {
	return <Typography variant="h5">Order Summary</Typography>;
}

Title.propTypes = {
	children: PropTypes.node
};
