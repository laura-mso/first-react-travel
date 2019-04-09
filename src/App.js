import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Location from './travellocation';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Laura's Travels</h1>
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<Location />
			</div>
		);
	}
}

export default App;
