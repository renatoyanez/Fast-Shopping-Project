import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
	center: { alignItems: 'flex-start', display: 'flex', justifyContent: 'flex-start', padding: '1%' }
});

export default props => {
	console.log(props)
	const classes = useStyles();
	return (
		<Container fixed>
			<Typography variant="h5" className={classes.center}>
				Thanks for your purchase!
			</Typography>
			<Typography variant="h5" className={classes.center}>
				{props.user.name}, we have created your order {`#${Math.random().toString(36).substring(2, 15).toUpperCase()}`}. Your items will be soon at your door
			</Typography>
			<Link to="/">
				<Button variant="contained" color="primary" className={classes.centeru}>
					Start Again
				</Button>
			</Link>
		</Container>
	);
};
