import React from 'react';
import classes from './Logo.module.css';
import Typography from '@material-ui/core/Typography';

export const InitLogo = props => (
    <div className={classes.initBox}>
        <Logo size="h1" />
        <Loading />
    </div>
)

export const Logo = props => {
    const size = props.size || "h1";
    const style = `${classes.logo} ${props.classes}`; 

    return (
        <Typography className={style} variant={size}>
            Bachillerato
        </Typography>
    )
}

export const Loading = props => {
    const size = props.size || "h4";

    return (
        <Typography variant={size} className={classes.loading}>
            Loading<span>.</span><span>.</span><span>.</span>
        </Typography>
    )
}