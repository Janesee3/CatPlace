import React, { Component } from "react";
import "./FaveButton.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartEmpty } from "@fortawesome/free-regular-svg-icons";
import GlobalVars from "../../GlobalVars";
import UserManager from "../../UserManager";

class FaveButton extends Component {
	constructor() {
		super();
		this.state = {
			isActive: false,
			isLoading: false
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
			<div className="fave-btn-container">
				{/* Active Button (favourited) */}

				{this.state.isActive ? (
					<Button
						className="fave-btn"
						bsSize="large"
						disabled={this.state.isLoading}
						onClick={
							!this.state.isLoading
								? () => this.handleRemoveClick(this.props.picId)
								: null
						}
					>
						<FontAwesomeIcon className="fave-icon" icon={faHeart} />
						{this.state.isLoading
							? "Removing..."
							: "Remove from Favourites"}
					</Button>
				) : (
					// Inactive Button (not favourited)

					<Button
						className="fave-btn"
						bsSize="large"
						disabled={this.state.isLoading}
						onClick={
							!this.state.isLoading
								? () =>
										this.handleFavouriteClick(
											this.props.picId
										)
								: null
						}
					>
						<FontAwesomeIcon
							className="fave-icon"
							icon={faHeartEmpty}
						/>
						{this.state.isLoading
							? "Adding..."
							: "Add to Favourites"}
					</Button>
				)}
			</div>
		);
	}

	handleFavouriteClick(id) {
		this.favouriteCat(id);
	}

	handleRemoveClick(id) {
		this.unfavouriteCat(id);
	}

	favouriteCat(id) {
		this.setState({
			isLoading: true
		});

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
					isActive: true,
					isLoading: false
				});
			})
			.catch(err => console.log(err));
	}

	unfavouriteCat(id) {
		this.setState({
			isLoading: true
		});

		fetch(
			`http://thecatapi.com/api/images/favourite?api_key=${
				GlobalVars.API_KEY
			}&sub_id=${this.userId}&image_id=${id}&action=remove`
		)
			.then(res => {
				return res.text();
			})
			.then(text => {
				console.log("removed!");

				// Update faves in local storage
				UserManager.removeFromUserFavourites(id);

				// Update state for button
				this.setState({
					isLoading: false
				});

				// trigger refresh to reload new data set (might not be good for UX)
				this.props.refreshCallback();
			})
			.catch(err => console.log(err));
	}
}

export default FaveButton;
