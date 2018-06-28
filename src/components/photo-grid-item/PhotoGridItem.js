import React from "react";
import PropTypes from "prop-types";
import { Col, Thumbnail } from "react-bootstrap";
import "./PhotoGridItem.css";
import FaveButton from "../fave-button/FaveButton";

const PhotoGridItem = props => (
	<Col md={12} lg={6}>
		<div className="thumbnail-container">
			<Thumbnail src={props.src}>
				<div className="button-container">
					<FaveButton
						picId={props.id}
						refreshCallback={props.refreshCallback}
					/>
				</div>
			</Thumbnail>
		</div>
	</Col>
);

PhotoGridItem.propTypes = {
	id: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
	refreshCallback: PropTypes.func
};

export default PhotoGridItem;
