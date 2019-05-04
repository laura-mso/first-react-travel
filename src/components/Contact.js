import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <h2>This page is currently in progress</h2>
        <Link to="/wcs-first-react-travel" className="homepagelink">
          {" "}
          Back to homepage
        </Link>
      </div>
    );
  }
}
