import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import PortalLayout from "./layout/PortalLayout";

import "./assets/scss/style.scss";

const hist = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <Router history={hist}>
        <Switch>
          <Route path="/" render={props => <PortalLayout {...props} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
