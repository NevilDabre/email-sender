import React from 'react';
import Prototypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = {
    container:{
        justifyContent: 'center',
        display: 'flex',
        flexWrap: 'wrap'
    },
    paper:{
        margin: '10px',
        textAlign: 'center'
    },
    input:{
        overflowY: 'scroll',
        resize: 'none',
        margin: '10px',
    }
}

class OutputComponent extends React.Component{
    render(){

        return(
            <div>
                <Grid container spacing={24}>
                    <Grid item={true} xs>
                    </Grid>
                    <Grid item={true} xs={10}>
                    <Paper style={styles.paper}>
                    <form style={styles.container} noValidate autoComplete="OFF">
                    <TextField
                    id="statusOutput"
                    label="Email API progress will be shown here..."
                    margin="normal"
                    style={styles.input}
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
                    <Grid item={true} xs>
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