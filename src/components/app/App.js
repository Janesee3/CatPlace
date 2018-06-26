import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "../home/Home";
import MyCats from "../my-cats/MyCats";
import Header from "../header/Header";
// import GlobalVars from "../../GlobalVars";

class App extends Component {
	componentDidMount() {
		// console.log(GlobalVars.API_KEY);
	}

	render() {
		return (
			<Router>
				<div className="App">
					<div className="container">
						<Header />
						<hr />
						<Route exact={true} path="/" component={Home} />
						<Route
							exact={true}
							path="/my-cats"
							component={MyCats}
						/>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
