import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Location from './travellocation';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Laura's Travels</h1>
				</header>
				<Location
					destination="Sunwaves Festival (Mamaia)"
					country="Romania"
					photo="https://scontent.ffra1-1.fna.fbcdn.net/v/t1.0-9/31727846_10216616021338557_7283916495636135936_o.jpg?_nc_cat=106&_nc_eui2=AeGx9w2ZvDo2dY-YfUiGPdfh_TjtSwG0_ZWbV5cqVImQdTDq5EfthipTb4ACUEQt3kphvXcBbWBfBgF1qrFhHk3Ajqk9QWHY1qvbkTHsO24NhA&_nc_ht=scontent.ffra1-1.fna&oh=d3130c6383a0723eb8d4f15e3c6fc684&oe=5D340494"
					distance="1900"
				/>
				<Location
					destination="Off-Sonar (Barcelona)"
					country="Spain"
					photo="https://scontent.ffra1-1.fna.fbcdn.net/v/t31.0-8/19144167_1585129298163767_8216604057020465419_o.jpg?_nc_cat=103&_nc_eui2=AeHhpBq5QhGe4lohWIuclbJmqw4KEaoSIxUgsD9WuuTpSeMHo4IcUxnACjXpzTAHKSlleluOK7f916OVY0V5cUN3eSuztzg7fDA_qKV25d8YCw&_nc_ht=scontent.ffra1-1.fna&oh=9f6f1962d7582113164939c0434ddf81&oe=5D3FAABF"
					distance="1800"
				/>
				<Location
					destination="Dimensions (Pula)"
					country="Croatia"
					photo="https://scontent.ffra1-1.fna.fbcdn.net/v/t1.0-9/41320074_10217740660287508_9047793086599528448_n.jpg?_nc_cat=109&_nc_eui2=AeFz24XbUrN15MftW5nR7iVNZxN9C0DDx_SBPgA2Tw1hHMUpY1qyaTjmyr_k565JIBsr0jI5xBsqooq_Uu9Z3xWs_TbvL7PoMpvhvv8tIg4Weg&_nc_ht=scontent.ffra1-1.fna&oh=3f292136add482145c57f42521c5b268&oe=5D378ABE"
					distance="1100"
				/>
			</div>
		);
	}
}

export default App;
