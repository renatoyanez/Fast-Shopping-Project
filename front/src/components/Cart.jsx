import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import DeleteIcon from '@material-ui/icons/Delete';
import Alert from '@material-ui/lab/Alert';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles({
	root: {
		marginLeft: '15%',
		marginTop: '5%',
		width: '75%'
	},

	title: {
		fontSize: 14,
		marginLeft: '5%'
	},
	button: {
		display: 'flex',
		justifyContent: 'flex-end'
	},
	image: {
		width: 180,
		height: '11%',
		objectFit: 'contain'
	}
});

function getValues(num) {
	let arr = [];
	for (var i = 1; i <= num; i++) {
		arr.push(i);
	}

	return arr.map((number, index) => {
		return <option value={number}>{number}</option>;
	});
}
function handleMultiplication(val, val2) {
	let arr = [];
	arr.push(val);
	console.log(val, 'VALORES');
}

export default (props) => {
	const classes = useStyles();
	let local = JSON.parse(localStorage.getItem('cart'));
	return (
		<div className={classes.root}>
			<div style={{ alignItems: 'center', display: 'flex', justifyContent: 'space-around', padding: '1%' }}>
				<h4>Shopping Cart</h4>
				{props.select !== 0 ? (
					<div className={classes.button}>
						<Link to="/checkout">
							<Button variant="contained" color="primary">
								Check Out
							</Button>
						</Link>
					</div>
				) : null}
			</div>
			{local !== null ? local.length >= 1 ? (
				<div>
					{local &&
						local.map((productoCar, index) => {
							return (
								<Card key={index}>
									<CardContent>
										<GridList cols={7} key={index}>
											<CardMedia
												className={classes.image}
												image={productoCar.images[1]}
												title={productoCar.name}
											/>
											<Typography className={classes.title} color="textSecondary" gutterBottom>
												{productoCar.name}
											</Typography>
											<Button
												color="primary"
												aria-label="upload picture"
												component="span"
												onClick={() => {
													return props.handleDelete(productoCar.id);
												}}
											>
												<DeleteIcon />
											</Button>
											<Typography variant="h5" component="h2">
												<Typography
													className={classes.title}
													color="textSecondary"
													gutterBottom
												>
													Unit Price
												</Typography>
												{`$${productoCar.price}`}
											</Typography>
											<Typography variant="h5" component="h2">
												<Typography
													className={classes.title}
													color="textSecondary"
													gutterBottom
												>
													Qty
												</Typography>
												<FormControl className={classes.formControl}>
													<NativeSelect
														key={index}
														onChange={(e) => props.handleChange(e.target.value)}
														inputProps={{
															name: 'sarasa',
															id: 'uncontrolled-native'
														}}
													>
														{productoCar.stock >= 0 ? getValues(productoCar.stock) : null}
													</NativeSelect>
												</FormControl>
											</Typography>
											<Typography variant="h5" component="h2">
												<Typography
													className={classes.title}
													color="textSecondary"
													gutterBottom
												>
													Total for Quantity
												</Typography>
												{`$${productoCar.price * props.select}`}
											</Typography>
										</GridList>
									</CardContent>
								</Card>
							);
						})}
				</div>
			) : (
				<CardContent
					variant="h5"
					component="h2"
					style={{ justifyContent: 'center', display: 'flex', alignContent: 'center', marginBottom: '2%' }}
				>
					<Alert severity="info"> There are no products added...</Alert>
				</CardContent>
			) : (
				<CardContent
					variant="h5"
					component="h2"
					style={{ justifyContent: 'center', display: 'flex', alignContent: 'center', marginBottom: '2%' }}
				>
					<Alert severity="info"> There are no products added...</Alert>
				</CardContent>
			)}
		</div>
	);
}


// import React, { Fragment } from 'react';
// import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import { Link } from 'react-router-dom';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import DeleteIcon from '@material-ui/icons/Delete';
// import Alert from '@material-ui/lab/Alert';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';
// import { flexbox } from '@material-ui/system';



// // function Alert(props) {
// // 	return <MuiAlert elevation={6} variant="filled" {...props} />;
// // }

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		display: 'flex',
// 	},
// 	details: {
// 		display: 'flex',
// 		flexDirection: 'row',
// 		alignContent: 'flex-end',
// 		paddingLeft: theme.spacing(8),
// 	},
// 	content: {
// 		flex: '1 0 auto',
// 		paddingLeft: theme.spacing(0),
// 	},
// 	image: {
// 		width: 151,
// 	},
// 	controls: {
// 		display: 'flex',
// 		alignItems: 'center',
// 		paddingLeft: theme.spacing(1),
// 		paddingBottom: theme.spacing(4),
// 	},
// 	price: {
// 		textAlign: 'right'
// 	},
// 	formControl: {
// 		margin: theme.spacing(1),
// 		minWidth: 120,
// 	},
// }));

// let theme = createMuiTheme();
// theme = responsiveFontSizes(theme);

// export default (props) => {

// 	const classes = useStyles();

// 	let local = JSON.parse(localStorage.getItem('cart'));
// 	if (local) {
// 		return (
// 			<Container>
// 				{/******************** Cards *****************/}
// 				<Box my={10}>
// 					<Grid container spacing={3}>
// 						{local.length ? (local.map(product => (
// 							<Grid item xs={12} key={false}>
// 								<Card className={classes.root} key={false}>
// 									<CardMedia
// 										className={classes.image}
// 										image={product.images[1]}
// 										title={product.name}
// 									/>

// 									<div className={classes.details}>
// 										<CardContent className={classes.content}>
// 											<Typography component="h5" variant="h5">
// 												{product.name}
// 											</Typography>
// 											<Typography variant="subtitle1" color="textSecondary">
// 												Mac Miller
//           								</Typography>
// 										</CardContent>
// 										<div className={classes.controls}>
// 											<Button
// 												color="secondary"
// 												aria-label="upload picture"
// 												component="span"
// 											>
// 												<DeleteIcon />
// 											</Button>
// 										</div>
// 										<div className={classes.price}>
// 											<Typography component="h5" variant="h5">
// 												Unit price
// 											</Typography>
// 											<FormControl className={classes.formControl}>
// 												<InputLabel htmlFor="uncontrolled-native">Name</InputLabel>
// 												<NativeSelect
// 													defaultValue={1}
// 													inputProps={{
// 														name: 'name',
// 														id: 'uncontrolled-native',
// 													}}
// 												>
// 													<option value={1}>1</option>
// 													<option value={2}>2</option>
// 													<option value={3}>3</option>
// 													<option value={4}>4</option>
// 												</NativeSelect>
// 											</FormControl>
// 										</div>


// 									</div>

// 								</Card>
// 							</Grid>
// 						))) : (<div></div>)}
// 					</Grid>
// 				</Box>
// 				{/******************** Cards *****************/}
// 			</Container>


// 		);
// 	} else {
// 		return (
// 			<CardContent
// 				variant="h5"
// 				component="h2"
// 				style={{ justifyContent: 'center', display: 'flex', alignContent: 'center', marginBottom: '2%' }}
// 			>
// 				<Alert severity="info"> Cart is empty</Alert>
// 			</CardContent>
// 		)
// 	}
// };


