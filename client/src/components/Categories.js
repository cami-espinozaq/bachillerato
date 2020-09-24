import React from 'react';
import classes from './Categories.module.css';
import { ReactComponent as Parrot } from '../assets/images/parrot-opt-group.svg';
import { ReactComponent as Music } from '../assets/images/music-neon-opt.svg';
import { ReactComponent as Fruit } from '../assets/images/pineapple-opt.svg';
import { ReactComponent as World } from '../assets/images/world1-opt.svg';
import { ReactComponent as People } from '../assets/images/avatar-opt.svg';
import { Grid, Typography } from '@material-ui/core';

import Wrapper from '../UI/Wrapper';

const Category = props => {

    const colorClass = {
        'cyan': classes.cyan,
        'purple': classes.purple,
        'fuccia': classes.fuccia,
        'orange': classes.orange
    }
    const image = {
        'animals': <Parrot />,
        'music': <Music />,
        'fruits': <Fruit />,
        'countries': <World />,
        'celebrities': <People />
    }
    const style = `${classes.block} ${colorClass[props.color]}`;

    return (
        <div className={style}>
            <Typography variant="h4">{props.name}</Typography>
            {image[props.name.toLowerCase()]}
        </div>
    )
};

const categories = props => {

    const colors = ['cyan', 'purple', 'fuccia', 'orange'];
    const categoryList = ['Animals', 'Music', 'Fruits', 'Countries', 'Celebrities'];

    let categories = categoryList.map((name, index) => {
        const colorIndex = index % 4;
        return <Category color={colors[colorIndex]} name={name} />
    });

    return (
        <Wrapper logoLink="/settings">
            <Grid container spacing={6}>
                <Grid item xs={12} md={4}>
                    {categories}
                </Grid>
            </Grid>
        </Wrapper>
    );
}

export default categories;