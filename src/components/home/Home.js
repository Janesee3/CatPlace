import React, { Component } from "react";

import "./Home.css";
import PhotoGrid from "../photo-grid/PhotoGrid";

// API KEY: MzMxNjI4

class Home extends Component {
	constructor() {
		super();
		this.state = {
			cats: [],
			isLoading: true
		};
		this.handleClickSave = this.handleClickSave.bind(this);
	}

	componentDidMount() {
		this.getCats();
	}

	handleClickSave(key) {
		// localStorage.removeItem("favourites");
		// console.log("removed!");

		let faves = JSON.parse(localStorage.getItem("favourites"));

		if (faves == null) {
			faves = [key];
		} else {
			faves.push(key);
		}

		localStorage.setItem("favourites", JSON.stringify(faves));

		// console.log(
		// 	`Finished Writing! New Faves: ${localStorage.getItem("favourites")}`
		// );
	}

	getCats() {
		fetch(
			"http://thecatapi.com/api/images/get?format=xml&results_per_page=20"
		)
			.then(res => {
				return res.text();
			})
			.then(text => {
				this.setState({
					cats: this.extractImgObjects(text),
					isLoading: false
				});

				// console.log(this.state.cats);
			});
	}

	// Returns an array {key, url (image)} from the input text string
	extractImgObjects(text) {
		let regexUrl = new RegExp("<url>(.+)</url>", "g");
		let regexId = new RegExp("<id>(.+)</id>", "g");
		let urls = this.getMatches(text, regexUrl, 1);
		let ids = this.getMatches(text, regexId, 1);
		return urls.map((url, index) => {
			return { key: ids[index], src: url };
		});
	}

	// Returns an array of matches for the input group index
	getMatches(string, regex, index) {
		index || (index = 1); // default to the first capturing group
		var matches = [];
		var match;
		while ((match = regex.exec(string))) {
			matches.push(match[index]);
		}
		return matches;
	}

	render() {
		return (
			<div>
				<PhotoGrid
					cats={this.state.cats}
					hasLoaded={!this.state.isLoading}
					handleClickSave={this.handleClickSave}
				/>
			</div>
		);
	}
}

export default Home;
