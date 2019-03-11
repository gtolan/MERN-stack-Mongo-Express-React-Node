import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { ConnectedDashboard, Dashboard } from "./Dashboard";
import { Router, Route } from "react-router-dom";
import { history } from "../store/history";
import { ConnectedNavigation } from "./Navigation";
import { ConnectedTaskDetail } from "./TaskDetail";

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <ConnectedNavigation />
      <Route exact path="/dashboard" component={ConnectedDashboard} />
      <Route
        exact
        path="/task/:taskId"
        render={({ match }) => <ConnectedTaskDetail match={match} />}
      />
    </Provider>
  </Router>
);
