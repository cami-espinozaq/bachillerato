import React from 'react';
import { Logo } from '../UI/Logo';
import { Grid } from '@material-ui/core';
import classes from './Menu.module.css';
import { NavLink, Link } from 'react-router-dom';

const menu = () => {
    return (
        <div class="app-wrap">
            <Grid container className="full-height">
                <Grid item xs={12} className={classes.initBox}>
                    <Logo size="h5" classes={classes.menuLogo} />
                </Grid>
                <Grid item xs={12} className={classes.initBox}>
                    <ul className={classes.itemList}>
                        <li className={classes.menuItem}>
                            <NavLink to="/play">New Game</NavLink>
                        </li>
                        <li className={classes.menuItem}>
                            <NavLink to="/settings">Settings</NavLink>
                        </li>
                        <li className={classes.menuItem}>
                            <NavLink to="/instructions">How to Play</NavLink>
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </div>
    );
}

export default menu;