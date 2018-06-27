import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "./Header.css";
import NavBar from "../nav-bar/NavBar";
import icon from "../../assets/kitten_icon.png";

class Header extends Component {
	render() {
		return (
			<div className="header">
				<img src={icon} />
				<h1 className="heading">The Cat Place</h1>
				<h2 className="subheading">Get your daily dose of Cat here!</h2>
				<NavBar />
			</div>
		);
	}
}

export default Header;
