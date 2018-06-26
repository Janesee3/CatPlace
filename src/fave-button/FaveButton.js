import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartEmpty } from "@fortawesome/free-regular-svg-icons";
import GlobalVars from "../GlobalVars";
import UserManager from "../UserManager";

class FaveButton extends Component {
	constructor() {
		super();
		this.state = {
			isActive: false
		};
		this.userId = UserManager.getUserId();
		this.handleFavouriteClick.bind();
	}

	componentDidMount() {
		if (UserManager.isFavourited(this.props.picId)) {
			this.setState({
				isActive: true
			});
		}
	}

	render() {
		return (
			<div>
				{this.state.isActive ? (
					<Button bsSize="large">
						<FontAwesomeIcon icon={faHeart} />
						Remove from Favourites
					</Button>
				) : (
					<Button
						bsSize="large"
						onClick={() =>
							this.handleFavouriteClick(this.props.picId)
						}
					>
						<FontAwesomeIcon icon={faHeartEmpty} />
						Add to Favourites
					</Button>
				)}
			</div>
		);
	}

	handleFavouriteClick(id) {
		this.favouriteCat(id);
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

				// Update faves in local storage
				UserManager.addToUserFavourites(id);

				// Update state of button to change appearance
				this.setState({
					isActive: true
				});
			})
			.catch(err => console.log(err));
	}
}

export default FaveButton;
