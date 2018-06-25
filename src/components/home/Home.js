import React, { Component } from "react";

import "./Home.css";
import PhotoGrid from "../photo-grid/PhotoGrid";

class Home extends Component {
	constructor() {
		super();
		this.state = {
			cats: []
		};
	}

	componentDidMount() {
		this.getCats();
	}

	getCats() {
		fetch(
			"http://thecatapi.com/api/images/get?format=html&results_per_page=3"
		)
			.then(res => {
				return res.text();
			})
			.then(text => {
				this.setState({ cats: this.extractImgUrl(text) });
				console.log(this.state.cats);
			});
	}

	// Returns an array image urls from the input htmlText string
	extractImgUrl(htmlText) {
		let regex = new RegExp('<img src="(.+)"', "g");
		let matches = this.getMatches(htmlText, regex, 1);
		return matches;
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
				<PhotoGrid />
			</div>
		);
	}
}

export default Home;
