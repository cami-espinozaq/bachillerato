import React from 'react';
import { Logo } from '../UI/Logo';
import classes from './Wrapper.module.css';
import { NavLink } from 'react-router-dom';

const wrapper = props => {
    return (
        <div class="app-wrap">
            <div className={classes.logoWrapper}>
                <NavLink to="/">
                    <Logo size="h6" />
                </NavLink>
            </div>
            <div className={classes.mainGrid}>
                {props.children}
            </div>
        </div>
    );
}

export default wrapper;