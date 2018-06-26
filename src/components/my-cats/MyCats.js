import React, { Component } from "react";
import GlobalVars from "../../GlobalVars";
import "./MyCats.css";
import PhotoGrid from "../photo-grid/PhotoGrid";
import Utility from "../../Utility";
import UserManager from "../../UserManager";

class MyCats extends Component {
	constructor() {
		super();
		this.state = {
			faves: [],
			isLoading: true
		};
		this.userId = UserManager.getUserId();
		this.getFavourites = this.getFavourites.bind(this);
	}

	componentDidMount() {
		this.getFavourites();
	}

	render() {
		return (
			<div>
				<div>My Cats</div>
				<PhotoGrid
					cats={this.state.faves}
					hasLoaded={!this.state.isLoading}
					callback={this.getFavourites}
				/>
			</div>
		);
	}

	getFavourites() {
		fetch(
			`http://thecatapi.com/api/images/getfavourite?api_key=${
				GlobalVars.API_KEY
			}&sub_id=${this.userId}`
		)
			.then(res => {
				return res.text();
			})
			.then(text => {
				this.setState({
					faves: Utility.extractImgObjects(text),
					isLoading: false
				});

				console.log(this.state.faves);
			});
	}
}

export default MyCats;
