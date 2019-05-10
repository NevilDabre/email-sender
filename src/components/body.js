import React from 'react';
import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import OutputComponent from './output';

const styles = theme => ({
    container: {
        justifyContent: 'center',
        display: 'flex',
        flexWrap: 'wrap'
    },
    input: {
        margin: theme.spacing.unit,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center'
    },
    button:{
        margin: theme.spacing.unit,
    }
})

class BodyComponent extends React.Component {
    state = {

    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value })
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <form className={classes.container} noValidate autoComplete="off">
                                <TextField
                                    id="apiKey"
                                    label="MailChimp API Key"
                                    value={this.state.apiKey}
                                    onChange={this.handleChange('apiKey')}
                                    margin="normal"
                                    placeholder="Enter your MailChimp API Key"
                                    variant="outlined"
                                    className={classes.input}
                                    fullWidth
                                >
                                </TextField>
                                <TextField
                                    id="templateId"
                                    label="MailChimp Template Id"
                                    value={this.state.templateId}
                                    onchange={this.handleChange('templateId')}
                                    margin="normal"
                                    placeholder="Enter your MailChimp Template ID"
                                    variant="outlined"
                                    className={classes.input}
                                    fullWidth
                                >
                                </TextField>
                                <Button className={classes.button} color="default" variant="outlined">Reset</Button>
                                <Button className={classes.button} color="primary" variant="contained">Submit</Button>

                            </form>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                    </Grid>
                </Grid>
                <OutputComponent></OutputComponent>

            </div>
        );
    }
}

BodyComponent.prototypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(BodyComponent);