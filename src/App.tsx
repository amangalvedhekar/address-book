import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ConnectedFetchList from 'src/containers/ConnectedFetchList';
import ConnectedContactDetails from 'src/containers/ConnectedContactDetails';
import Header from 'src/components/Header';

export default function App() {
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
        <Route path="*">
          <div>not found</div>
        </Route>
      </Switch>
    </Router>
  );
}
