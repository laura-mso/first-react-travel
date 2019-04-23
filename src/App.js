import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Location from "./components/travellocation";
import SimpsonsAPI from "./components/SimpsonsAPI";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button />
        <div className="Travelsection">
          <Location />
        </div>
        <SimpsonsAPI />
      </div>
    );
  }
}

export default App;
