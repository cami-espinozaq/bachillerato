import React from 'react';
import { Logo } from '../UI/Logo';
import classes from './Wrapper.module.css';
import { NavLink } from 'react-router-dom';

const wrapper = props => {

    const returnLink = props.logoLink || "/";

    return (
        <div className="app-wrap">
            <div className={classes.logoWrapper}>
                <NavLink to={returnLink}>
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