import React, { Component } from "react";
import { Button, Glyphicon } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartEmpty } from "@fortawesome/free-regular-svg-icons";

class FaveButton extends Component {
	constructor() {
		super();
		this.state = {
			isActive: false
		};
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
					<Button bsSize="large">
						<FontAwesomeIcon icon={faHeartEmpty} />
						Add to Favourites
					</Button>
				)}
			</div>
		);
	}
}

export default FaveButton;
