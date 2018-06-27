import React, { Component } from "react";
import "./Home.css";
import PhotoGrid from "../photo-grid/PhotoGrid";
import UserManager from "../../UserManager";
import { withInfiniteScroll } from "../WithInfiniteScroll";
// import GlobalVars from "../../GlobalVars";
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
		this.getCats = this.getCats.bind(this);
	}

	render() {
		return (
			<div>
				<h1 className="heading">Home</h1>
				{/* <PhotoGrid
					cats={this.state.cats}
					hasLoaded={!this.state.isLoading}
					loadMore={this.getCats}
				/> */}
				<GridWithInfinite
					cats={this.state.cats}
					hasLoaded={!this.state.isLoading}
					loadMore={this.getCats}
				/>;
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
				let newCats = Utility.extractImgObjects(text);

				this.setState({
					cats: this.state.cats.slice().concat(newCats),
					isLoading: false
				});
			});
	}
}

const GridWithInfinite = withInfiniteScroll(PhotoGrid);

export default Home;
