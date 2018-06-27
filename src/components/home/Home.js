import React, { Component } from "react";
import "./Home.css";
import PhotoGrid from "../photo-grid/PhotoGrid";
import UserManager from "../../UserManager";
import GlobalVars from "../../GlobalVars";
import Utility from "../../Utility";

class Home extends Component {
	constructor() {
		super();
		this.state = {
			cats: [],
			isLoading: true
		};
		this.userId = UserManager.getUserId();
		this.fetchCatsEndPoint =
			"http://thecatapi.com/api/images/get?format=xml&results_per_page=20";
	}

	render() {
		return (
			<div>
				<h1 className="heading">Home</h1>
				<PhotoGrid
					cats={this.state.cats}
					hasLoaded={!this.state.isLoading}
				/>
			</div>
		);
	}

	componentDidMount() {
		this.getCats();
	}

	// ** Network Related Calls ** //

	getCats() {
		fetch(this.fetchCatsEndPoint)
			.then(res => {
				return res.text();
			})
			.then(text => {
				this.setState({
					cats: Utility.extractImgObjects(text),
					isLoading: false
				});
			});
	}
}

export default Home;
