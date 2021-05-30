import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import Logo from "../../images/Logo.svg";
import Button from "../Button/Button";

function Navbar() {
	const [click, setClick] = useState(false);
	const [Blind, setBlind] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	const [Navbar, setNavbar] = useState(false);

	
	const onMouseEnter = () => {
		if(window.innerWidth > 960){
			setBlind(false);
		} else {
			setBlind(true)
		}
	};
		const onMouseLeave = () => {
			if(window.innerWidth > 960){
				setBlind(true);
			} else {
				setBlind(false)
			}	
	
	};
	const changeIcon = () => {
	if(window.innerWidth > 960) {
		if (window.scrollY >= 10) {
			setNavbar(false);
		} else {
			setNavbar(true);
		}
	}
	};

	window.addEventListener("scroll", changeIcon);

	return (
		<>
			<nav className= "navbar">
				<Link to="/" className="navbar-logo">
					<img src={Logo} alt="logo"></img>
				</Link>
				<div className="menu-icon" onClick={handleClick}>
					<i className={click ? "fas fa-times" : "fas fa-bars"}></i>
				</div>
			{/*<div className={Navbar? "blindbar" : "blindbar active" }><i className="fas fa-bars" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} ></i></div>
		{Blind && <div className="test"/>}*/}
 
			
			
				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item" >
						<Link to="/Menu" className="nav-links" onClick={closeMobileMenu}>
							Menu 
						</Link>
						
					</li>
					
					<li className="nav-item">
						<Link to="/" className="nav-links" onClick={closeMobileMenu}>
							Updates
						</Link>
					</li>

					<li className="nav-item">
						<Link to="/" className="nav-links" onClick={closeMobileMenu}>
							Gallery
						</Link>
					</li>

					<li className="nav-item">
						<Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
							Contact
						</Link>
					</li>
					<hr className="horizontal"></hr>
					<li>
						<Link to="/directions"></Link>
					</li>
					<li>
						<Button></Button>
					</li>
				</ul>
			
			</nav>
		</>
	);
}

export default Navbar;
