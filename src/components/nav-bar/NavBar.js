import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

class NavBar extends Component {
	render() {
		return (
			<div>
				<Grid>
					<Row>
						<Col>
							<Link to="/">Home</Link>
						</Col>
						<Col>
							<Link to="/my-cats">My Cats</Link>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default NavBar;
