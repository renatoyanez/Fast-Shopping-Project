import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
	details: {
		display: 'flex',
		flexDirection: 'column'
	},
	content: {
		flex: '1 0 auto'
	},
	image: {
		width: 180,
		height: 235,
		objectFit: 'contain'
	},

	card: {
		display: 'flex'
	},
	price: {
		display: 'flex',
		direction: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	button: {
		marginLeft: '175px'
	},
	sortby2: {
		paddingTop: theme.spacing(5),
	},
	formControl: {
		minWidth: 120,
	},
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default (props) => {

	const classes = useStyles();

	const handleClick = () => {
		setOpen(true);
		// setOpen(false);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

	const [open, setOpen] = React.useState(false);
	const [openSort, setOpenSort] = React.useState(false);
	const [sort, setsort] = React.useState('');

	const handleSortClick = () => {
		setOpenSort(true);
	};

	const handleSortClose = () => {
		setOpenSort(false);
	}

	const handleChange = (event) => {
		setsort(event.target.value);
	};

	return (
		<Container>


			{/******************  Sort By ******************/}
			<Grid
				container
				direction="row"
				justify="flex-end"
				alignItems="center"
			>

				<Box className={classes.sortby2}>
					<Grid
						container
						direction="row"
						justify="flex-end"
						alignItems="flex-end"
					>
						<Grid item xs={6} key={1}>
							<Typography variant="h6">
								Sort by:
                        </Typography>
						</Grid>
						<Grid item xs={6} key={2}>

							<FormControl className={classes.formControl}>

								<Select
									labelId="demo-controlled-open-select-label"
									id="demo-controlled-open-select"
									open={openSort}
									onClose={handleSortClose}
									onOpen={handleSortClick}
									value={sort}
									onChange={handleChange}
								>
									<MenuItem value="">
										<em>None</em>
									</MenuItem>
									<MenuItem value='Alpha Order' onClick={props.handleSortByAlpha}>Alpha Order</MenuItem>
									<MenuItem value='Lowest Price' onClick={props.handleSortByPrice}>Lowest Price</MenuItem>
									<MenuItem value='Most Recent' onClick={props.handleSortByDate}>Most Recent</MenuItem>
								</Select>
							</FormControl>

						</Grid>
					</Grid>
				</Box>

			</Grid>
			{/******************  Sort By ******************/}


			<Box my={10}>
				<Grid container spacing={3}>
					{props.products.length >= 1 ? (
						props.products.map((product, index) => (
							<Grid item xs={6} key={index}>
								<Card className={classes.card} key={index}>
									<CardMedia
										className={classes.image}
										image={product.images[1]}
										title={product.name}
									/>
									<div className={classes.details}>
										<CardContent className={classes.content}>
											<ThemeProvider theme={theme}>
												<Typography component="h5" variant="h5">
													{product.name}
												</Typography>
												<Typography variant="subtitle1">Category: {product.categories[0].name}</Typography>
												<div
													style={{
														overflow: 'hidden',
														textOverflow: 'ellipsis',
														width: '11rem'
													}}
												>
													<Typography variant="subtitle1" color="textSecondary">
														{product.description.length > 50 ? (
															`${product.description.slice(0, 50)}...`
														) : (
																product.description
															)}
													</Typography>
												</div>
												<div className={classes.price}>
													<Typography component="h4" variant="h5">
														{`$${product.price}`}
													</Typography>
													<Button
														variant="contained"
														color="primary"
														className={classes.button}
														onClick={() => {
															props.fetchSingleProduct(product.id);
															props.handleRemove(product);
															handleClick()
														}}
													>
														Add to Cart
													</Button>
													<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
														<Alert onClose={handleClose} severity="info">
															Added to cart!
														</Alert>
													</Snackbar>
												</div>
											</ThemeProvider>
										</CardContent>
									</div>
								</Card>
							</Grid>
						))
					) : (
							<div />
						)}
				</Grid>
			</Box>
			{/******************** Cards *****************/}
		</Container>
	);
};
