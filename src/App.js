import React, { Component } from "react";
import "./App.css";
import Button from "./Button";

import Location from "./travellocation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button />
        <div className="Travelsection">
          <Location />
        </div>
      </div>
    );
  }
}

export default App;
