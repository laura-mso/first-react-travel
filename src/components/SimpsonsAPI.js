import React, { Component } from "react";

const SimpsonsAPI = ({ quotes, isLoaded }) => {
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
};

export default SimpsonsAPI;
