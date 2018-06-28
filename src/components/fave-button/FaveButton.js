import React, { Component } from "react";
import "./FaveButton.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartEmpty } from "@fortawesome/free-regular-svg-icons";
import UserManager from "../../UserManager";
import { handleFetchError } from "../../Utility";

class FaveButton extends Component {
	constructor() {
		super();
		this.state = {
			isActive: false,
			isLoading: false
		};
		this.userId = UserManager.getUserId();
		this.toastId = null;
		this.favouriteUrl = `https://api.jumpstart.site/thecatapi.com/api/images/favourite?sub_id=${
			this.userId
		}`;
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
			? (handler = () => this.unfavouriteCat(this.props.picId))
			: (handler = () => this.favouriteCat(this.props.picId));
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

	//** Network Related Calls **/

	favouriteCat(id) {
		this.setState({ isLoading: true });

		fetch(this.favouriteUrl + `&image_id=${id}`, { mode: "no-cors" })
			.then(res => {
				return res.text();
			})
			.then(() => {
				// Update faves in local storage (to be checked against to decide if
				// button should be in active or inactive state)
				UserManager.addToUserFavourites(id);

				this.setState({
					isActive: true,
					isLoading: false
				});
			})
			.catch(err => {
				this.setState({ isLoading: false });
				handleFetchError(err);
			});
	}

	unfavouriteCat(id) {
		this.setState({ isLoading: true });

		fetch(this.favouriteUrl + `&image_id=${id}&action=remove`, {
			mode: "no-cors"
		})
			.then(res => {
				return res.text();
			})
			.then(() => {
				// Update faves in local storage (to be checked against to decide if
				// button should be in active or inactive state)
				UserManager.removeFromUserFavourites(id);

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
				this.setState({ isLoading: false });
				handleFetchError(err);
			});
	}
}

export default FaveButton;
