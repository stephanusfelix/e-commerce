import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/login";
import Main from "../pages/main";
import Detail from "../pages/detail";
import AdminHome from "../pages/homeAdmin";
import AdminRekap from "../pages/adminRekap";
import Cart from "../pages/cart";
import Logout from "../components/logout";

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route exact path="/cart" component={Cart} />
        <Route path="/homeAdmin" component={AdminHome} />
        <Route path="/adminRekap" component={AdminRekap} />

        <Route path="/:id" component={Detail} />
      </Switch>
    );
  }
}
