import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

class Header extends Component {
	render() {
		return (
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/my-cats">My Cats</Link>
				</li>
			</ul>
		);
	}
}

export default Header;
