import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/login";

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    );
  }
}
