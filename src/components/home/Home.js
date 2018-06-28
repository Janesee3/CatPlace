import React, { Component } from "react";
import "./Home.css";
import PhotoGrid from "../photo-grid/PhotoGrid";
import UserManager from "../../UserManager";
import { withInfiniteScroll } from "../WithInfiniteScroll";
import {
	extractImgObjects,
	removeDuplicatesFromNewArray,
	handleFetchError
} from "../../Utility";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Home extends Component {
	constructor() {
		super();
		this.state = {
			cats: [],
			isLoading: true
		};
		this.userId = UserManager.getUserId();
		this.fetchCatsEndPoint =
			"https://thecatapi.com/api/images/get?format=xml&results_per_page=20";
		this.getCats = this.getCats.bind(this);
	}

	render() {
		return (
			<div>
				<ToastContainer />
				<h1 className="heading">Home</h1>
				<PhotoGridWithInfinite cats={this.state.cats} loadMore={this.getCats} />
			</div>
		);
	}

	componentDidMount() {
		this.getCats();
	}

	// ** Network Related Calls ** //

	getCats() {
		this.setState({ isLoading: true });

		fetch(this.fetchCatsEndPoint)
			.then(res => {
				return res.text();
			})
			.then(text => {
				// Remove images from newCats that were already previously pulled
				// by comparing their "key" attribute
				let newCats = extractImgObjects(text);
				newCats = removeDuplicatesFromNewArray(newCats, this.state.cats, "key");

				this.setState({
					cats: this.state.cats.slice().concat(newCats),
					isLoading: false
				});
			})
			.catch(err => {
				this.setState({ isLoading: false });
				handleFetchError(err);
			});
	}
}

const PhotoGridWithInfinite = withInfiniteScroll(PhotoGrid);

export default Home;
