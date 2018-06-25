import React, { Component } from "react";
import { Row, Grid, Col, Thumbnail, Button, Image } from "react-bootstrap";

import "./PhotoGrid.css";

class PhotoGrid extends Component {
	render() {
		let gridItem = (
			<Col xs={12} md={6} lg={3}>
				<Thumbnail src="http://25.media.tumblr.com/tumblr_lpetx6Bl2q1qmvo0go1_500.jpg">
					{/* <p>
						<Button bsStyle="primary">Button</Button>&nbsp;
						<Button bsStyle="default">Button</Button>
					</p> */}
				</Thumbnail>
			</Col>
		);

		return (
			<div>
				<Grid className="container-fluid">
					<Row>
						{gridItem}
						{gridItem}
						{gridItem}
						{gridItem}
					</Row>
				</Grid>
			</div>
		);
	}
}

export default PhotoGrid;
