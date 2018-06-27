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

	render() {
		return (
			<div>
				<h1 className="heading">My Cats</h1>
				<PhotoGrid
					cats={this.state.faves}
					hasLoaded={!this.state.isLoading}
					refreshCallback={this.getFavourites}
				/>
			</div>
		);
	}

	componentDidMount() {
		this.getFavourites();
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
			});
	}
}

export default MyCats;
