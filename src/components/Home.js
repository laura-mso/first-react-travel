import React, { Component } from "react";
import "../App.css";
import Button from "./Button";
import Location from "./travellocation";
import SimpsonsAPI from "./SimpsonsAPI";
import GenerateQuote from "./GenerateQuote";
import Timer from "./Timer";

class Home extends Component {
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
        <Timer />
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

export default Home;
