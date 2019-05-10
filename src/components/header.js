import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import shadows from '@material-ui/core/styles/shadows';
import { palette } from '@material-ui/system';

const styles = {
    heading:{
        textShadow: '1px 1px 2px purple'
    }
}

function HeaderComponent(props){
    const { classes } = props;

    return(
        <div>
            <Typography component="h2" class={classes.heading} color="primary.main" variant="h1" gutterBottom>
            Email Generator + Sender
            </Typography>
        </div>
    )
}

HeaderComponent.prototypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HeaderComponent);