import React, {useState, useEffect} from 'react';
import './App.css';
import { InitLogo } from './components/Logo';
import Menu from './components/Menu';
import 'fontsource-roboto';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const renderMain = () => { setIsLoading(false); }
    const fakeLoading = () => setTimeout(renderMain, 4000);

    fakeLoading();
  }, [])

  return isLoading ? <InitLogo /> : <Menu />;
}

export default App;
