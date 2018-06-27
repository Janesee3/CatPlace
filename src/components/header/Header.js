import React, { Component } from "react";
import "./Header.css";
import NavBar from "../nav-bar/NavBar";
import icon from "../../assets/kitten_icon.png";

class Header extends Component {
	render() {
		return (
			<div className="header">
				<img src={icon} alt="kitten-icon" />
				<h1 className="title">The Cat Place</h1>
				<h2 className="subtitle">Get your daily dose of Cat here!</h2>
				<NavBar />
			</div>
		);
	}
}

export default Header;
