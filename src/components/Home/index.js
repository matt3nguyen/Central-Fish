import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./Hero";
import Slider from "./Slider/Slider";
function Home() {
	return (
		<Router>
		<Slider></Slider>
		
		</Router>
	);
}

export default Home;
