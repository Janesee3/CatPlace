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
		this.handleClickSave = this.handleClickSave.bind(this);
	}

	componentDidMount() {
		this.getCats();
	}

	handleClickSave(key) {
		this.favouriteCat(key);
	}

	render() {
		return (
			<div>
				<PhotoGrid
					cats={this.state.cats}
					hasLoaded={!this.state.isLoading}
				/>
			</div>
		);
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

	favouriteCat(id) {
		console.log(`user id: ${this.userId}, want to favourite: ${id}}`);

		fetch(
			`http://thecatapi.com/api/images/favourite?api_key=${
				GlobalVars.API_KEY
			}&sub_id=${this.userId}&image_id=${id}`
		)
			.then(res => {
				return res.text();
			})
			.then(text => {
				console.log("favourited!");
			})
			.catch(err => console.log(err));
	}
}

export default Home;
