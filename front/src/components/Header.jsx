import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';

const useStyles = makeStyles((theme) => ({
	toolbar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'space-around'
	},

	title: {
		color: '#000000',
		marginTop: '1.5%'
	}
}));

export default (props) => {
	const classes = useStyles();
	let local = JSON.parse(localStorage.getItem('cart'));
	if (local){
	return (
		<Toolbar className={classes.toolbar}>
			<Box p={1} style={{ marginLeft: '17%' }}>
				<Badge color="secondary">
					<ImportantDevicesIcon style={{ marginRight: '17%' }} />
				</Badge>
			</Box>

			<Grid container>
				<Box flexGrow={1}>
					<Link color="inherit" key="Fast Shopping" variant="body2" className={classes.toolbarLink} to="/">
						<Typography className={classes.title} variant="h5">
							Fast Shopping
						</Typography>
					</Link>
				</Box>
				<Box p={1} style={{ marginRight: '20%' }}>
					<Link to="/cart">
						<IconButton style={{ color: '#000000' }}>
							<Badge badgeContent={local.length} color="secondary">
								<ShoppingCartIcon />
							</Badge>
						</IconButton>
					</Link>
				</Box>
			</Grid>
		</Toolbar>
	);}
	else {
		return (
		<Toolbar className={classes.toolbar}>
			<Box p={1} style={{ marginLeft: '17%' }}>
				<Badge color="secondary">
					<ImportantDevicesIcon style={{ marginRight: '17%' }} />
				</Badge>
			</Box>

			<Grid container>
				<Box flexGrow={1}>
					<Link color="inherit" key="Fast Shopping" variant="body2" className={classes.toolbarLink} to="/">
						<Typography className={classes.title} variant="h5">
							Fast Shopping
						</Typography>
					</Link>
				</Box>
				<Box p={1} style={{ marginRight: '20%' }}>
					<Link to="/cart">
						<IconButton style={{ color: '#000000' }}>
							<Badge badgeContent={props.products.length} color="secondary">
								<ShoppingCartIcon />
							</Badge>
						</IconButton>
					</Link>
				</Box>
			</Grid>
		</Toolbar>
		)
	}
};
