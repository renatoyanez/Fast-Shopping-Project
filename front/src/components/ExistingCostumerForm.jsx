import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import WelcomeContainer from '../containers/WelcomeContainer'

const useStyles = makeStyles((theme) => ({
	buttons: {
		display: 'flex',
		justifyContent: 'flex-end'
	},
	button: {
		marginTop: theme.spacing(2),
		marginLeft: theme.spacing(0)
	}
}));


export default (props) => {
	console.log(props.user)
	const classes = useStyles();

	// const [value] = React.useState(0);


	return (
		<>
			{(props.user === null) || (Object.entries(props.user).length === 0 && props.user.constructor === Object)
				? (
					<form onSubmit={props.handleSubmit}>
						<Grid container spacing={3}>
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
								// defaultValue={props.user.email != null ? props.user.email : null}
								/>
								{console.log()}
								{(props.user === null) || !(Object.entries(props.user).length === 0 && props.user.constructor === Object)
									? <Alert severity="error">Wrong email, try again</Alert> : null}
								<Button variant="contained" color="primary" onClick={props.handleSubmit} className={classes.button}>
									Look up
				</Button>
							</Grid>
						</Grid>
					</form>
				) : (<WelcomeContainer />)
			}
		</>
	);
};
