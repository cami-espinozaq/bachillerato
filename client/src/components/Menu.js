import React from 'react';
import { Logo } from './Logo';
import { Grid } from '@material-ui/core';
import classes from './Menu.module.css';

const menu = () => {
    return (
        <div>
            <Grid container class="app-grid-row">
                <Grid item xs={12} className={classes.initBox}>
                    <Logo size="h5" classes={classes.menuLogo} />
                </Grid>
                <Grid item xs={12} className={classes.initBox}>
                    <ul className={classes.itemList}>
                        <li className={classes.menuItem}>New Game</li>
                        <li className={classes.menuItem}>Settings</li>
                        <li className={classes.menuItem}>Ranking</li>
                    </ul>
                </Grid>
            </Grid>
        </div>
    );
}

export default menu;