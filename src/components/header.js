import React from 'react';
import Typography from '@material-ui/core/Typography';

const styles = {
    heading:{
        textShadow: '1px 1px 2px purple',
        textAlign: 'center'
    }
}

function HeaderComponent(props){
    return(
        <div>
            <Typography component="h2" style={styles.heading} variant="h1" gutterBottom>
            Email Generator + Sender
            </Typography>
        </div>
    )
}

export default HeaderComponent;