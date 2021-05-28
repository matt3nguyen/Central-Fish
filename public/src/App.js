import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/Pages/About";
import Home from "./components/Home/index.js";
import ShellFish from "./components/Pages/Shell";
import Sides from "./components/Pages/Sides";
import Contact from "./components/Contact/Contact";
import Cooking from "./components/Pages/Cooking";
import NotificationBar from "./components/NotiBar/NotiBar";
import FooterBar from "./components/footerBar/footer";
import Menu from "./components/Menu/index"


function App() {
	return (
		<body>
		<main>
		<Router>
		<header>
			<Navbar>
			</Navbar>
			<NotificationBar></NotificationBar>
			
			</header>
			
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/About" exact component={About} />
				<Route path="/Shell Fish" exact component={ShellFish} />
				<Route path="/Sides" exact component={Sides} />
				<Route path="/Contact" exact component={Contact} />
				<Route path="/Cooking" exact component={Cooking} />
				<Route path="/Menu" exact component={Menu} />
				
			</Switch>
			
			
		</Router>
		</main>
		<FooterBar></FooterBar>
		</body>
	);
}

export default App;
