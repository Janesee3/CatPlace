import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Grid } from "react-bootstrap";
import "./PhotoGrid.css";
import PhotoGridItem from "../photo-grid-item/PhotoGridItem";

class PhotoGrid extends Component {
	render() {
		return (
			<Grid className="container-fluid">
				<Row>
					{this.props.cats.length > 0 &&
						this.props.cats.map(cat => {
							return (
								<PhotoGridItem
									key={cat.key}
									id={cat.key}
									src={cat.src}
									refreshCallback={this.props.refreshCallback}
								/>
							);
						})}
				</Row>
			</Grid>
		);
	}
}

PhotoGrid.propTypes = {
	cats: PropTypes.arrayOf(PropTypes.object).isRequired,
	hasLoaded: PropTypes.bool.isRequired,
	loadMore: PropTypes.func, // For infinite scrolling
	refreshCallback: PropTypes.func // For refreshing page
};
export default PhotoGrid;
