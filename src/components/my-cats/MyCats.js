import React, { Component } from "react";
import "./MyCats.css";
import PhotoGrid from "../photo-grid/PhotoGrid";
import { extractImgObjects, handleFetchError } from "../../Utility";
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
			`https://api.jumpstart.site/thecatapi.com/api/images/getfavourites?sub_id=${
				this.userId
			}`
		)
			.then(res => {
				return res.text();
			})
			.then(text => {
				this.setState({
					faves: extractImgObjects(text),
					isLoading: false
				});
			})
			.catch(err => {
				this.setState({ isLoading: false });
				handleFetchError(err);
			});
	}
}

export default MyCats;
