import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => (
	<div className="nav-bar">
		<Row>
			<Col xs={12} md={6}>
				<Link to="/">
					<span className="nav-link-text">Home</span>
				</Link>
			</Col>
			<Col xs={12} md={6}>
				<Link to="/my-cats">
					<span className="nav-link-text">My Cats</span>
				</Link>
			</Col>
		</Row>
	</div>
);

export default NavBar;
