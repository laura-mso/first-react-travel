import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Location from "./components/travellocation";
import SimpsonsAPI from "./components/SimpsonsAPI";
import GenerateQuote from "./components/GenerateQuote";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: {}
    };
    this.selectQuote = this.selectQuote.bind(this);
  }

  selectQuote() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          quotes: json[0]
        });
      });
  }

  componentDidMount() {
    this.selectQuote();
  }

  render() {
    return (
      <div className="App">
        <Button />
        <div className="Travelsection">
          <Location />
        </div>
        <SimpsonsAPI quotes={this.state.quotes} />
        <GenerateQuote getQuote={this.selectQuote} />
      </div>
    );
  }
}

export default App;
