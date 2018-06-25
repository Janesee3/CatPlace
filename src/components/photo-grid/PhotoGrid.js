import React, { Component } from "react";
import { Row, Grid, Col } from "react-bootstrap";

import "./PhotoGrid.css";

class PhotoGrid extends Component {
	render() {
		return (
			<div>
				<div>My Cats</div>
				<Grid>
					<Row className="show-grid">
						<Col xs={12} md={8}>
							First
						</Col>
						<Col xs={6} md={4}>
							Second
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default PhotoGrid;
