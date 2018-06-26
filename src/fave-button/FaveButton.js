import React, { Component } from "react";
import { Button, Glyphicon } from "react-bootstrap";

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
					// <Button
					// 	bsStyle="primary"
					// 	onClick={this.props.handleClickSave}
					// >
					// 	Add To Favourites
					// </Button>
					<Button bsSize="large">
						<Glyphicon glyph="star" /> Star
					</Button>
				) : (
					// <Button
					// 	bsStyle="primary"
					// 	onClick={this.props.handleClickRemove}
					// >
					// 	Remove From Favourites
					// </Button>
					<Button bsSize="large">
						<Glyphicon glyph="star-empty" /> Star
					</Button>
				)}
			</div>
		);
	}
}

export default FaveButton;
