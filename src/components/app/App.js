import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "../home/Home";
import MyCats from "../my-cats/MyCats";

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<div className="container">
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/my-cats">My Cats</Link>
							</li>
						</ul>
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
