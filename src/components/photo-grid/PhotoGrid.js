import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Grid } from "react-bootstrap";
import "./PhotoGrid.css";
import PhotoGridItem from "../photo-grid-item/PhotoGridItem";
import Utility from "../../Utility";

class PhotoGrid extends Component {
	render() {
		return (
			<Grid className="container-fluid">
				<Row>
					{this.props.hasLoaded &&
						this.props.cats.map(cat => {
							return (
								<PhotoGridItem
									key={cat.key}
									id={cat.key}
									src={cat.src}
									refreshCallback={this.props.callback}
								/>
							);
						})}
				</Row>
			</Grid>
		);
	}

	// componentDidMount() {
	// 	window.addEventListener("scroll", this.onScroll, false);
	// }

	// componentWillUnmount() {
	// 	window.removeEventListener("scroll", this.onScroll, false);
	// }

	// onScroll = () => {
	// 	if (Utility.isEndOfPage()) {
	// 		this.props.loadMore();
	// 	}
	// };
}

PhotoGrid.propTypes = {
	cats: PropTypes.arrayOf(PropTypes.object).isRequired,
	hasLoaded: PropTypes.bool.isRequired,
	loadMore: PropTypes.func, // For infinite scrolling
	refreshCallback: PropTypes.func // For refreshing page
};
export default PhotoGrid;
