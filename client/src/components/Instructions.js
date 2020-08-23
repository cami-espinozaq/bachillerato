import React from 'react';
import { Grid } from '@material-ui/core';
import classes from './Instructions.module.css';
import Wrapper from '../UI/Wrapper';

const instructions = props => {
    const multi = (classList) => classList.join(' '); 

    return (
        <Wrapper>
            <Grid container spacing={6}>
                <Grid item xs={12} md={4}>
                    <fieldset className={multi([classes.block, classes.blockCyan])}>
                        <legend>What is this about?</legend>
                        <p>
                            Challenge your knowledge and memory by playing bachillerato!
                            Try answer all the different categories in time. The more creative you are,
                            the more points you will get! Super simple.
                        </p>
                    </fieldset>
                </Grid>
                <Grid item xs={12} md={4}>
                    <fieldset className={multi([classes.block, classes.blockPurple])}>
                        <legend>Points</legend>
                        <p>
                            The least popular the words you choose, the more points you get.
                            Also, the least time you take to answer, the more bonus points you get.
                        </p>
                    </fieldset>
                </Grid>
                <Grid item xs={12} md={4}>
                    <fieldset className={multi([classes.block, classes.blockOrange])}>
                        <legend>Ranking</legend>
                        <p>
                            You can add your final score to the global ranking and compete with others.
                        </p>
                    </fieldset>
                </Grid>
            </Grid>
        </Wrapper>
    )
}

export default instructions;