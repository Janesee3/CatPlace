import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "../header/Header";
import NavRoutes from "../NavRoutes";
// import UserManager from "../../UserManager";

class App extends Component {
	// For debug purposes only
	// componentDidMount() {
	// 	UserManager.removeUserId();
	// 	UserManager.clearUserFavourites();
	// }

	render() {
		return (
			<Router>
				<div className="App">
					<Header />
					<div className="container">
						<NavRoutes />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
