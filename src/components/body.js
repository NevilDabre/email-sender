import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import asyncValidate from './mailChimpFormValidate';
import OutputComponent from './output';

const styles = {
    container: {
        justifyContent: 'center',
        display: 'flex',
        flexWrap: 'wrap'
    },
    input: {
        margin: '5px',
    },
    paper: {
        padding:'10px',
        textAlign: 'center',
    },
    buttonsContainer: {
        margin: '5px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    button:{
        margin: '0 5px',
    }
}

const validate = values => {
    const errors = {}
    const requireFields = [
        'apiKey',
        'templateId'
    ]
    requireFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    return errors
}

const renderTextField = (
    { input, label, meta: { touched, error, invalid }, ...custom },
) => (
        <TextField
            label={label}
            placeholder={label}
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            {...custom}
        />
    )
class BodyComponent extends React.Component{
    state= {};
    handleChange = name => event => {
        this.setState({ [name]: event.target.value })
    };

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
        <div>
        <Grid container spacing={24}>
            <Grid item={true} xs>
            </Grid>
            <Grid item={true} xs={6}>
            <Paper style={styles.paper}>
                    <form style={styles.containerStyle} onSubmit={handleSubmit} autoComplete="off">
                        <Field
                            name="apiKey"
                            component={renderTextField}
                            label="MailChimp API Key"
                            fullWidth
                            variant="outlined"
                            margin="normal"
                            value={this.state.apiKey}
                            style={styles.input}
                            />
                        <Field
                            name="templateId"
                            component={renderTextField}
                            label="MailChimp Template Id"
                            fullWidth
                            variant="outlined"
                            value={this.state.templateId}
                            style={styles.input}
                            />
                            <div style={styles.buttonsContainer}>
                            <Button style={styles.button} color="default" variant="outlined" disabled={pristine || submitting} onClick={reset}>Reset</Button>
                            <Button style={styles.button} color="primary" variant="contained" disabled={pristine || submitting}>Submit</Button>
                            </div>
                    </form>
                    </Paper>
            </Grid>
            <Grid item={true} xs>
            </Grid>
        </Grid>
        <OutputComponent></OutputComponent>
    </div>
        );
}
}


export default reduxForm({
    form: 'BodyComponent',
    validate,
    asyncValidate
  })(BodyComponent)