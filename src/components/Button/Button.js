import "./Button.css";
import { Link } from "react-router-dom";
import React from "react";

export function Button() {
	return (
		<Link to="/Menu">
			<button className="btn">Get Quote</button>
		</Link>
	);
}
