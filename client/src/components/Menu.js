import React from 'react';
import { Logo } from '../UI/Logo';
import { Grid } from '@material-ui/core';
import classes from './Menu.module.css';
import { NavLink, Link } from 'react-router-dom';

const mainMenu = () => {

    const linkList = [
        {route: "/play", name: "New Game"},
        {route: "/settings", name: "Settings"},
        {route: "/instructions", name: "How to Play"}
    ]

    return (
        <MenuWrapper links={linkList} />
    );
}

export const MenuWrapper = props => {

    const links = props.links.map((linkItem) => {
        return (
            <li className={classes.menuItem}>
                <NavLink to={linkItem.route}>{linkItem.name}</NavLink>
            </li>
        );
    })

    return (
        <div class="app-wrap">
            <Grid container className="full-height">
                <Grid item xs={12} className={classes.initBox}>
                    <NavLink to="/">
                        <Logo size="h5" classes={classes.menuLogo} />
                    </NavLink>
                </Grid>
                <Grid item xs={12} className={classes.initBox}>
                    <ul className={classes.itemList}>
                        {links}
                    </ul>
                </Grid>
            </Grid>
        </div>
    );
}

export default mainMenu;