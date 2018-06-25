import React, { Component } from "react";
import { Col, Thumbnail, Button } from "react-bootstrap";

import "./PhotoGridItem.css";

class PhotoGridItem extends Component {
	render() {
		return (
			<Col xs={12} md={6} lg={3}>
				<Thumbnail src={this.props.src}>
					{/* <p>
						<Button bsStyle="primary">Button</Button>&nbsp;
						<Button bsStyle="default">Button</Button>
					</p> */}
				</Thumbnail>
			</Col>
		);
	}
}

export default PhotoGridItem;
