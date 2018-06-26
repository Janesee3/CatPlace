import React, { Component } from "react";
import { Col, Thumbnail } from "react-bootstrap";

import "./PhotoGridItem.css";
import FaveButton from "../../fave-button/FaveButton";

class PhotoGridItem extends Component {
	render() {
		return (
			<Col md={12} lg={6}>
				<div className="thumbnail-container">
					<Thumbnail src={this.props.src}>
						<div className="button-container">
							<FaveButton picId={this.key} />
						</div>
					</Thumbnail>
				</div>
			</Col>
		);
	}
}

export default PhotoGridItem;
