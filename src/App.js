import React, { Component } from "react";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="navigation">
          <NavLink
            exact
            to="/wcs-first-react-travel"
            activeClassName="navactive"
          >
            {" "}
            Home{" "}
          </NavLink>
          <NavLink to="/contact" activeClassName="navactive">
            {" "}
            Contact{" "}
          </NavLink>
        </div>
        <div>
          <Switch>
            <Route path="/wcs-first-react-travel" component={Home} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
