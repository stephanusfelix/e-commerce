import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/main";
import Page from "./route/index";
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
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={renderHome} />
          <Route path="/:page" component={renderPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
