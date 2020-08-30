import React, {useState, useEffect} from 'react';
import './App.css';
import { InitLogo } from './UI/Logo';
import MainMenu from './components/Menu';
import 'fontsource-roboto';
import Instructions from './components/Instructions';
import Settings from './components/Settings';
import Categories from './components/Categories';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const renderMain = () => { setIsLoading(false); }
    const fakeLoading = () => setTimeout(renderMain, 4000);

    fakeLoading();
  }, [])

  const THEME = createMuiTheme({
    typography: {
      "fontFamily": "Warnes, Montserrat"
    }
  })

  const routes = (
    <Switch>
      <Route path="/instructions" component={Instructions} />
      <Route path="/settings" component={Settings} />
      <Route path="/categories" component={Categories} />
      <Route path="/" exact component={MainMenu} />
      <Redirect to="/" />
    </Switch>
  );

  return isLoading ? 
    <InitLogo /> : 
    <ThemeProvider theme={THEME}>{routes}</ThemeProvider>;
}

export default App;
