import React, { Component } from "react";
import { Row, Grid } from "react-bootstrap";
import "./PhotoGrid.css";
import PhotoGridItem from "../photo-grid-item/PhotoGridItem";

const PhotoGrid = (props) => (
	<Grid className="container-fluid">
		<Row>
			{props.hasLoaded &&
				props.cats.map(cat => {
					return (
						<PhotoGridItem
							key={cat.key}
							id={cat.key}
							src={cat.src}
							callback={props.callback}
						/>
					);
				})}
		</Row>
	</Grid>
);

export default PhotoGrid;
