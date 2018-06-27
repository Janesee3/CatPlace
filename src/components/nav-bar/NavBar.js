import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

import "./NavBar.css";

class NavBar extends Component {
	render() {
		return (
			<div className="nav-bar">
				<Row>
					<Col xs={12} md={6}>
						<Link to="/">
							<span>Home</span>
						</Link>
					</Col>
					<Col xs={12} md={6}>
						<Link to="/my-cats">My Cats</Link>
					</Col>
				</Row>
			</div>
		);
	}
}

export default NavBar;
