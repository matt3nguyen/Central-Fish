import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/Pages/About";
import Home from "./components/Home/index.js";
import ShellFish from "./components/Pages/Shell";
import Sides from "./components/Pages/Sides";
import Fresh from "./components/Pages/Fresh";
import Contact from "./components/Pages/Contact";
import GetQuote from "./components/Pages/GetQuote";
import Cooking from "./components/Pages/Cooking";
import NotificationBar from "./components/NotiBar/NotiBar";

function App() {
	return (
		<Router>
			<NotificationBar></NotificationBar>
			<Navbar></Navbar>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/About" exact component={About} />
				<Route path="/Shell Fish" exact component={ShellFish} />
				<Route path="/Sides" exact component={Sides} />
				<Route path="/Fresh" exact component={Fresh} />
				<Route path="/Contact" exact component={Contact} />
				<Route path="/GetQuote" exact component={GetQuote} />
				<Route path="/Cooking" exact component={Cooking} />
			</Switch>
		</Router>
	);
}

export default App;
