import React from 'react';
import classes from './Logo.module.css';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';

const logo = props => (
    <div className={classes.logo}>
        <Typography variant="h1">
            Bachillerato
        </Typography>
    </div>
)

export default logo;