import React from "react";
import NavBar from "./NavBar";
import { Typography } from "@material-ui/core";

function Portfolio( ) {
	document.title = "Portfolio";

	return (
		<div className="Portfolio">
			<NavBar />
			<Typography align="center" style={ { transform: "translateY( calc( 50vh - 200% ) )" } } variant="h3">This page is under construction.</Typography>
		</div>
	);
}

export default Portfolio;
