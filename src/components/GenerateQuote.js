import React from "react";

const GenerateQuote = ({ getQuote }) => {
  return (
    <div className="GenerateQuote">
      <button className="Button" onClick={getQuote}>
        Get a new quote
      </button>
    </div>
  );
};
export default GenerateQuote;
