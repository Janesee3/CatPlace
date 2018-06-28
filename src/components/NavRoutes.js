import React from "react";
import Home from "./home/Home";
import MyCats from "./my-cats/MyCats";
import { Route } from "react-router-dom";

const NavRoutes = () => (
	<div>
		<Route exact={true} path="/" component={Home} />
		<Route exact={true} path="/my-cats" component={MyCats} />
	</div>
);

export default NavRoutes;
