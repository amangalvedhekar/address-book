import React, {useCallback, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ConnectedFetchList from 'src/containers/ConnectedFetchList';
import ConnectedContactDetails from 'src/containers/ConnectedContactDetails';
import {ThemeProvider} from 'styled-components';
import darkTheme from 'src/theme/dark';
import lightTheme from 'src/theme/light';
import GlobalStyles from 'src/theme/GlobalStyles';
import * as Grid from 'src/components/Grid';
import ConnectedHeader from 'src/containers/ConnectedHeader';

export default function App() {
  const [theme, setTheme] = useState<string>('light');
  const handleThemeChange = useCallback(() => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }, [theme]);
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Grid.Row>
          <Grid.Col>
            <ConnectedHeader />
          </Grid.Col>
          <Grid.Col>
            <button onClick={handleThemeChange} style={{margin: 'auto'}}>
              {`Switch from ${theme} theme`}
            </button>
          </Grid.Col>
        </Grid.Row>
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
