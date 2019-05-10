import React from 'react';
import ReactDom from 'react-dom';
import Prototypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme =>({
    container:{
        justifyContent: 'center',
        display: 'flex',
        flexWrap: 'wrap'
    },
    paper:{
        margin: theme.spacing.unit * 2,
        textAlign: 'center'
    },
    input:{
        overflowY: 'scroll',
        resize: 'none',
        margin: theme.spacing.unit * 2,
    }
})

class OutputComponent extends React.Component{
    render(){
        const { classes } = this.props;

        return(
            <div>
                <Grid container spacing={24}>
                    <Grid xs>
                    </Grid>
                    <Grid xs={6}>
                    <Paper className={classes.paper}>
                    <form className={classes.container} noValidate autoComplete="OFF">
                    <TextField
                    id="statusOutput"
                    label="Email API progress will be shown here..."
                    margin="normal"
                    className={classes.input}
                    variant="outlined"
                    fullWidth
                    multiline={true}
                    disabled={true}
                    rows={20}
                    >
                    </TextField>
                </form>
                </Paper>
                    </Grid>
                    <Grid xs>
                    </Grid>
                </Grid>
                </div>
        )
    }
}

OutputComponent.prototypes = {
    classes: Prototypes.object.isRequired
}

export default withStyles(styles)(OutputComponent);