import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/main";
import Page from "./route/index";
import { connect } from "react-redux";

const renderPage = () => {
  return (
    <>
      <Navbar />
      <Page />
    </>
  );
};

const renderHome = () => {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

function App(props) {
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("item"));
    props.add(items);
    // localStorage.removeItem("k2_recap");
    // localStorage.setItem("admin", JSON.parse(false));
    // localStorage.setItem("user", JSON.parse(true));
    //user/admin true = sudah login
    // localStorage.setItem("admin", JSON.parse(true));
    // localStorage.setItem("user", JSON.parse(false));
  });
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={renderHome} />
        <Route path="/:page" component={renderPage} />
      </Switch>
    </BrowserRouter>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    add: (item) => dispatch({ type: "ADD_ITEMS", payload: { item: item } }),
  };
};
export default connect(null, mapDispatchToProps)(App);
