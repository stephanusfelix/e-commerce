import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/login";
import Main from "../pages/main";
import Detail from "../pages/detail";

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Main} />
        <Route path="/:id" component={Detail} />
      </Switch>
    );
  }
}
