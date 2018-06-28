import React, { Component } from "react";
import "./FaveButton.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartEmpty } from "@fortawesome/free-regular-svg-icons";
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
		this.setState({
			isActive: UserManager.isFavourited(this.props.picId)
		});
	}

	render() {
		return (
			<div className="fave-btn-container">
				<Button
					className="fave-btn"
					bsSize="large"
					disabled={this.state.isLoading}
					onClick={this.getClickHandler()}
				>
					<FontAwesomeIcon className="fave-icon" icon={this.getButtonIcon()} />
					{this.getButtonContent(this.state.isActive)}
				</Button>
			</div>
		);
	}

	// ** Helper Methods ** //

	getClickHandler() {
		let handler;
		this.state.isActive
			? (handler = () => this.handleRemoveClick(this.props.picId))
			: (handler = () => this.handleFavouriteClick(this.props.picId));
		return !this.state.isLoading ? handler : null;
	}

	getButtonIcon() {
		return this.state.isActive ? faHeart : faHeartEmpty;
	}

	getButtonContent() {
		if (this.state.isActive) {
			return (
				<span>
					{this.state.isLoading ? "Removing..." : "Remove from Favourites"}
				</span>
			);
		} else {
			return (
				<span>{this.state.isLoading ? "Adding..." : "Add to Favourites"}</span>
			);
		}
	}

	//** Button Handlers **/

	handleFavouriteClick(id) {
		this.favouriteCat(id);
	}

	handleRemoveClick(id) {
		this.unfavouriteCat(id);
	}

	//** Network Related Calls **/

	favouriteCat(id) {
		this.setState({
			isLoading: true
		});

		fetch(
			`http://api.jumpstart.site:3000/thecatapi.com/api/images/favourite?sub_id=${
				this.userId
			}&image_id=${id}`
		)
			.then(res => {
				return res.text();
			})
			.then(text => {
				// Update faves in local storage (to be checked against to decide if
				// button should be in active or inactive state)
				UserManager.addToUserFavourites(id);

				// Update state of button to change appearance
				this.setState({
					isActive: true,
					isLoading: false
				});
			})
			.catch(err => {
				console.log("Error occured! Request cannot be submited.");
				console.log(err);
			});
	}

	unfavouriteCat(id) {
		this.setState({
			isLoading: true
		});

		fetch(
			`http://api.jumpstart.site:3000/thecatapi.com/api/images/favourite?sub_id=${
				this.userId
			}&image_id=${id}&action=remove`
		)
			.then(res => {
				return res.text();
			})
			.then(text => {
				// Update faves in local storage (to be checked against to decide if
				// button should be in active or inactive state)
				UserManager.removeFromUserFavourites(id);

				// Update state for button
				this.setState({
					isActive: false,
					isLoading: false
				});

				// If refreshCallback prop exists, call it to
				// trigger refresh and reload new data set
				if (this.props.refreshCallback) {
					this.props.refreshCallback();
				}
			})
			.catch(err => {
				console.log("Error occured! Request cannot be submited.");
				console.log(err);
			});
	}
}

export default FaveButton;
