import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./Hero";
function Home() {
	return (
		<Router>
			<Hero />
		</Router>
	);
}

export default Home;
