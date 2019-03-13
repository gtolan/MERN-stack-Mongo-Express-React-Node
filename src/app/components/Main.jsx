import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { ConnectedDashboard, Dashboard } from "./Dashboard";
import { Router, Route } from "react-router-dom";
import { history } from "../store/history";
import { ConnectedNavigation } from "./Navigation";
import { ConnectedLogin } from "./LoginPage";
import { ConnectedTaskDetail } from "./TaskDetail";
import { Redirect } from "react-router";

const RouteGaurd = Component => ({ match }) => {
  console.info("Route gaurd", match);
  if (!store.getState().session.authenticated) {
    //reroute
    return <Redirect to="/" />;
  } else {
    return <Component match={match} />;
  }
};

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <ConnectedNavigation />
      <Route exact path="/" component={ConnectedLogin} />
      <Route exact path="/dashboard" render={RouteGaurd(ConnectedDashboard)} />
      <Route
        exact
        path="/task/:taskId"
        render={RouteGaurd(ConnectedTaskDetail)}
      />
    </Provider>
  </Router>
);
