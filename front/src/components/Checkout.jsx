import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ExistingCostumerContainer from '../containers/ExistingCostumerFormContainer';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import OrderSummaryContainer from '../containers/OrderSummaryContainer';

const useStyles = makeStyles((theme) => ({
	layout: {
		width: 'auto',
		marginTop: 110,
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
			width: 600,
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	},
	layout2: {
		width: 'auto',
		marginTop: 110,
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.up(200 + theme.spacing(2) * 2)]: {
			width: 800,
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	},
	paper: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			padding: theme.spacing(3)
		}
	},
	stepper: {
		padding: theme.spacing(3, 0, 5)
	},
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	button: {
		marginTop: theme.spacing(2),
		marginLeft: theme.spacing(0)
	},
	email: {
		display: 'flex',
		justifyContent: 'flex-end'
	},
	existing: {
		display: 'flex',
		direction: 'row',
		justify: 'space-between',
		alignItems: 'center'
	},
	listItem: {
		padding: theme.spacing(0, 0)
	},
	total: {
		fontWeight: 700
	},
	title: {
		marginTop: theme.spacing(2)
	}
}));

const steps = ['New Costumer', 'Existing Costumer'];

function getStepContent(step) {
	switch (step) {
		case 'Existing Costumer':
			return <ExistingCostumerContainer />;
		default:
			throw new Error('Unknown step');
	}
}

export default (props) => {
	const classes = useStyles();
	const [value, setValue] = React.useState('New Costumer');

	const handleChange = () => {
		setValue(event.target.value);
	};

	return (
		<Grid container>
			<Grid item xs={6}>
				<CssBaseline />
				<main className={classes.layout}>
					<Paper className={classes.paper}>
						<Typography component="h1" variant="h4">
							Costumer Information
						</Typography>
						<FormControl component="fieldset">
							<Typography variant="subtitle1" color="textSecondary">
								Are you?
							</Typography>
							<RadioGroup
								onChange={handleChange}
								value={value}
								className={classes.stepper}
								row
								aria-label="position"
								name="position"
								defaultValue="New Costumer"
							>
								<FormControlLabel
									value="New Costumer"
									control={<Radio color="primary" />}
									label="New Costumer"
								/>
								<FormControlLabel
									value="Existing Costumer"
									control={<Radio color="primary" />}
									label="Existing Costumer"
								/>
							</RadioGroup>
						</FormControl>
						{value === steps[0] ? (
							<Grid container spacing={3}>
								<Grid item xs={12} sm={2}>
									<Typography>Full name</Typography>
								</Grid>
								<Grid item xs={12} sm={10}>
									<TextField
										onChange={props.inputChange}
										required
										variant="outlined"
										id="full name"
										name="name"
										label="Full name"
										fullWidth
										autoComplete="family-name"
									/>
								</Grid>
								<Grid item xs={12} sm={2}>
									<Typography>ID</Typography>
								</Grid>
								<Grid item xs={12} sm={10}>
									<TextField
										onChange={props.inputChange}
										required
										variant="outlined"
										id="ID"
										name="ID"
										label="ID"
										fullWidth
										autoComplete="ID"
									/>
								</Grid>
								<Grid item xs={12} sm={2}>
									<Typography>Address</Typography>
								</Grid>
								<Grid item xs={12} sm={10}>
									<TextField
										onChange={props.inputChange}
										required
										variant="outlined"
										id="address"
										name="address"
										label="Address"
										fullWidth
										autoComplete="address"
									/>
								</Grid>
								<Grid item xs={12} sm={2}>
									<Typography>Phone Number</Typography>
								</Grid>
								<Grid item xs={12} sm={10}>
									<TextField
										onChange={props.inputChange}
										required
										variant="outlined"
										id="phone number"
										name="phoneNumber"
										label="Phone number"
										fullWidth
										autoComplete="phone number"
									/>
								</Grid>

								<Grid item xs={12} sm={2}>
									<Typography>Email</Typography>
								</Grid>
								<Grid item xs={12} sm={10}>
									<TextField
										onChange={props.inputChange}
										required
										variant="outlined"
										id="email"
										name="email"
										label="Email"
										fullWidth
										autoComplete="email"
									/>
								</Grid>
								<>
									<Button
										variant="contained"
										color="primary"
										onClick={props.handleSubmit}
										className={classes.button}
									>
										Submit
								</Button>
								</>
							</Grid>
						) : (
								getStepContent(value)
							)}
					</Paper>
				</main>
			</Grid>
			<Grid item xs={6}>
				<CssBaseline />
				<main className={classes.layout2}>
					<Paper className={classes.paper}>
						<OrderSummaryContainer />
					</Paper>
				</main>
			</Grid>
		</Grid>
	);
};
