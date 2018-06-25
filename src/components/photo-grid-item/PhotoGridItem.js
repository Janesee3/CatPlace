import React, { Component } from "react";
import { Col, Thumbnail, Button, Glyphicon } from "react-bootstrap";

import "./PhotoGridItem.css";

class PhotoGridItem extends Component {
	render() {
		return (
			<Col md={12} lg={6}>
				<div className="thumbnail-container">
					<Thumbnail src={this.props.src}>
						<div className="button-container">
							<Button bsStyle="primary">Save</Button>&nbsp;
							{/* <Button>
							<Glyphicon glyph="heart" />
						</Button> */}
							{/* <Button bsStyle="primary">Button</Button> */}
						</div>
					</Thumbnail>
				</div>
			</Col>
		);
	}
}

export default PhotoGridItem;
