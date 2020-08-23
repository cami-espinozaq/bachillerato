import React, {useState, useEffect} from 'react';
import './App.css';
import { InitLogo } from './UI/Logo';
import Menu from './components/Menu';
import 'fontsource-roboto';
import Instructions from './components/Instructions';
import Settings from './components/Settings';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const renderMain = () => { setIsLoading(false); }
    const fakeLoading = () => setTimeout(renderMain, 4000);

    fakeLoading();
  }, [])

  const routes = (
    <Switch>
      <Route path="/instructions" component={Instructions} />
      <Route path="/settings" component={Settings} />
      <Route path="/" exact component={Menu} />
      <Redirect to="/" />
    </Switch>
  );

  return isLoading ? <InitLogo /> : routes;
}

export default App;
