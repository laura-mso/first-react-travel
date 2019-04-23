import React from "react";

const GenerateQuote = ({ selectQuote }) => {
  return (
    <div className="GenerateQuote">
      <button onClick={selectQuote}>Get a new quote</button>
    </div>
  );
};

export default GenerateQuote;
