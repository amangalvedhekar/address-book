import React, {useCallback, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ConnectedFetchList from 'src/containers/ConnectedFetchList';
import ConnectedContactDetails from 'src/containers/ConnectedContactDetails';
import Header from 'src/components/Header';
import {ThemeProvider} from 'styled-components';
import darkTheme from 'src/theme/dark';
import lightTheme from 'src/theme/light';
import GlobalStyles from 'src/theme/GlobalStyles';

export default function App() {
  const [theme, setTheme] = useState<string>('light');
  const handleThemeChange = useCallback(() => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }, [theme]);
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Header>Address Book</Header>
        <button onClick={handleThemeChange}>Toggle theme</button>
        <Switch>
          <Route exact path="/">
            <ConnectedFetchList />
          </Route>
          <Route exact path="/contact-details/:id">
            <ConnectedContactDetails />
          </Route>
          <Route path="*">
            <div>not found</div>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
