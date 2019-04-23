import React, { Component } from "react";

export default class SimpsonsAPI extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          quotes: json[0]
        });
      });
  }

  render() {
    var { isLoaded, quotes } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="DisplayQuote">
          <hr id="hrfooter" />
          <div>
            <h3 className="h3simpsons">Random Simpsons Quotes</h3>
            <img className="simpsonsimage" src={quotes.image} alt="" />
            <h5>{quotes.quote}</h5>
            <p>{quotes.character}</p>
          </div>
        </div>
      );
    }
  }
}
