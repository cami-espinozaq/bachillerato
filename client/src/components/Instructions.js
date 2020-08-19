import React from 'react';
import { Logo } from './Logo';
import { Grid } from '@material-ui/core';
import classes from './Instructions.module.css';

const instructions = props => {
    const multi = (classList) => classList.join(' '); 

    return (
        <div>
            <div className={classes.logoWrapper}><Logo size="h6" /></div>
            <div className={classes.mainGrid}>
                <Grid container>
                    <Grid item xs={4} spacing={4}>
                        <fieldset className={multi([classes.block, classes.blockCyan])}>
                            <legend>What is this about?</legend>
                        </fieldset>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default instructions;