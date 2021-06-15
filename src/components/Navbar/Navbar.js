import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import Logo from "../../images/Logo.svg";
import Button from "../Button/Button";

function Navbar() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<>
			<nav className= {click? 'navbar active' : 'navbar'}>
				<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
					<img src={Logo} alt="logo"></img>
				</Link>
				<div className="menu-icon" onClick={handleClick}>
					<i className={click ? "fas fa-times" : "fas fa-bars"}></i>
				</div>
			{/*<div className={Navbar? "blindbar" : "blindbar active" }><i className="fas fa-bars" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} ></i></div>
		{Blind && <div className="test"/>}*/}
		      <div onClick={closeMobileMenu} ><Button ></Button></div>
			
			
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
						
					</li>
				</ul>
			
			</nav>
		</>
	);
}

export default Navbar;
