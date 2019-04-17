import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

export default class Button extends Component {
  constructor(props) {
    super(props);
    // this.addSpinningClass = this.addSpinningClass.bind(this);
    this.state = {
      on: this.props.on
    };
  }
  handleClick = () => {
    this.setState({ on: !this.state.on });
  };
  render() {
    const travelling = this.state.on
      ? "Currently travelling :)"
      : "Currently in Berlin";
    return (
      <React.Fragment>
        <header className="App-header">
          <h1 className="App-title">Laura's Travels</h1>
          <img
            src={logo}
            className={this.state.on ? "App-logo" : "App-logo-slow"}
            alt="logo"
          />
        </header>

        <h2>{travelling}</h2>

        <div className="Button">
          <button onClick={this.handleClick} className={travelling}>
            Switch status
          </button>
        </div>
      </React.Fragment>
    );
  }
}
