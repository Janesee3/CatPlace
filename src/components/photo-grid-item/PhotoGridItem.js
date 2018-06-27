import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col, Thumbnail } from "react-bootstrap";
import "./PhotoGridItem.css";
import FaveButton from "../fave-button/FaveButton";

class PhotoGridItem extends Component {
	render() {
		return (
			<Col md={12} lg={6}>
				<div className="thumbnail-container">
					<Thumbnail src={this.props.src}>
						<div className="button-container">
							<FaveButton
								picId={this.props.id}
								refreshCallback={this.props.refreshCallback}
							/>
						</div>
					</Thumbnail>
				</div>
			</Col>
		);
	}
}

PhotoGridItem.propTypes = {
	key: PropTypes.string,
	id: PropTypes.string,
	src: PropTypes.string,
	refreshCallback: PropTypes.func
};

export default PhotoGridItem;
