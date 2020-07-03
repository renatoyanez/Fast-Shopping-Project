import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginBottom: theme.spacing(2),
    },
}));

export default props => {
    console.log(props)
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={false}>
                    <Typography variant="h4" gutterBottom className={classes.title}>
                        {`Welcome Back, ${props.user.name}!`}
                    </Typography>
                    <Typography gutterBottom>ID: {props.user.ID}</Typography>
                    <Typography gutterBottom>Address: {props.user.address}</Typography>
                    <Typography gutterBottom>Phone Number: {props.user.phoneNumber}</Typography>
                    <Typography gutterBottom>Email: {props.user.email}</Typography>
                </Grid>
                <Button onClick={() => props.onLogout()} color="primary">
                    Not {props.user.name}? Lookup again
                </Button>
            </Grid>
        </React.Fragment>
    );
}