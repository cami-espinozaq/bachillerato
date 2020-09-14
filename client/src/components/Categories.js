import React from 'react';
import classes from './Categories.module.css';
import { ReactComponent as Parrot } from '../assets/images/parrot-opt-group.svg';
import { Grid, Typography } from '@material-ui/core';

import Wrapper from '../UI/Wrapper';

const Category = props => {

    const style = `${classes.block} ${props.color}`

    return (
        <div className={style}>
            <Typography variant="h4">Animals</Typography>
            <Parrot />
        </div>
    )
};

const categories = props => {
    return (
        <Wrapper logoLink="/settings">
            <Grid container spacing={6}>
                <Grid item xs={12} md={4}>
                    <Category color={classes.blockCyan}></Category>
                </Grid>
            </Grid>
        </Wrapper>
    );
}

export default categories;