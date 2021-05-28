import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/index.js";
import Contact from "./components/Contact/Contact";
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
				<Route path="/Contact" exact component={Contact} />
				<Route path="/Menu" exact component={Menu} />
				
			</Switch>
			
			
		</Router>
		</main>
		<FooterBar></FooterBar>
		</body>
	);
}

export default App;
