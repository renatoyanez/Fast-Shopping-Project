import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
	seeMore: {
		marginLeft: theme.spacing(75),
		marginTop: theme.spacing(3)
	},
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	button: {
		marginTop: theme.spacing(3),
		marginRight: theme.spacing(2),
	},
}));

export default (props) => {

	let local = JSON.parse(localStorage.getItem('cart'));
	const arrayOfProducts = props.products;

	const [value, setValue] = React.useState(1);

	const handleChange = () => {
		setValue(event.target.value+1);
	};

	// const precio = (precio) => {
	// 	return event.target.value*precio
	// }

	const suma = (array) => {
		var count = 0;
		array.forEach((element) => {
			count = count + element.price;
		});
		return count;
	};

	const classes = useStyles();
	if (local) {
	return (
		<>
			<Title />
			<br />
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>Unit Price</TableCell>
						<TableCell>Units</TableCell>
						<TableCell>Total</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{local.map((product) => (
						<TableRow key={product.id} value={value}>
							<TableCell>{product.name}</TableCell>
							<TableCell>{product.price}</TableCell>
							<TableCell><Button>{handleChange}</Button></TableCell>
							<TableCell>{product.price}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<div className={classes.seeMore}>
				<Typography variant="h5">Total: ${suma(local)}</Typography>
			</div>
			{(props.user != null) && (props.user.name) && (local.length > 0) ? (
				<>
					<div className={classes.buttons}>
						<Link to="/thanks">
							<Button
								// href={props.user.name ? '/thanks' : null}
								variant="contained"
								color="primary"
								className={classes.button}
							>
								Place Order
					</Button>
						</Link>
					</div>
				</>) : null}
		</>
	);}
	else {
		return (
			<>
			<Title />
			<br />
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell>Name</TableCell>
						<TableCell>Unit Price</TableCell>
						<TableCell>Units</TableCell>
						<TableCell>Total</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{arrayOfProducts.map((product) => (
						<TableRow key={product.id} value={value}>
							<TableCell>{product.name}</TableCell>
							<TableCell>{product.price}</TableCell>
							<TableCell><Button>{handleChange}</Button></TableCell>
							<TableCell>{precio(product.price)}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<div className={classes.seeMore}>
				<Typography variant="h5">Total: ${suma(arrayOfProducts)}</Typography>
			</div>
			{(props.user != null) && (props.user.name) && (arrayOfProducts.length > 0) ? (
				<>
					<div className={classes.buttons}>
						<Link to="/thanks">
							<Button
								// href={props.user.name ? '/thanks' : null}
								variant="contained"
								color="primary"
								className={classes.button}
							>
								Place Order
					</Button>
						</Link>
					</div>
				</>) : null}
		</>
		)
	}
};
