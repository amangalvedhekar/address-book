import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import styled from 'styled-components';
import ConnectedFetchList from 'src/containers/ConnectedFetchList';
import ConnectedContactDetails from 'src/containers/ConnectedContactDetails';
const Header = styled.h1`
  border: 2px solid #61dafb;
`;

function App() {
  return (
    <Router>
      <Header>Address Book</Header>
      <Switch>
        <Route exact path="/">
          <ConnectedFetchList />
        </Route>
        <Route exact path="/contact-details/:id">
          <ConnectedContactDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
