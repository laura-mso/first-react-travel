import React, { Component } from "react";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import Home from "./components/Home";
import FavoriteFilm from "./components/FavoriteFilm";
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
          <NavLink to="/film" activeClassName="navactive">
            {" "}
            Favorite Movie{" "}
          </NavLink>
        </div>
        <div>
          <Switch>
            <Route path="/wcs-first-react-travel" component={Home} />
            <Route path="/film" component={FavoriteFilm} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
