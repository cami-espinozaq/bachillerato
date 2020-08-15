import React from 'react';
import './App.css';
import { Grid } from '@material-ui/core';
import Logo from './components/Logo';
import 'fontsource-roboto';

function App() {
  return (
    <Grid container className="app-grid-row">
      <Grid item xs={12}>
        <Logo />
      </Grid>
    </Grid>
  );
}

export default App;
