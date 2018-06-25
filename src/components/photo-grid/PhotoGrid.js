import React, { Component } from "react";
import { Row, Grid } from "react-bootstrap";

import "./PhotoGrid.css";
import PhotoGridItem from "../photo-grid-item/PhotoGridItem";

class PhotoGrid extends Component {
	render() {
		return (
			<div>
				<Grid className="container-fluid">
					<Row>
						{this.props.hasLoaded && this.props.cats.map(pic => {
							return <PhotoGridItem src={pic} />;
						})}
					</Row>
				</Grid>
			</div>
		);
	}
}

export default PhotoGrid;
