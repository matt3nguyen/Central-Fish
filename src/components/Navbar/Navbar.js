import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "../Dropdown/Dropdown";
import Logo from "../../images/Logo.svg";
import Button from "../Button/Button";

function Navbar() {
	const [click, setClick] = useState(false);
	const [dropdown, setDropdown] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	const [navbar, setNavbar] = useState(false);

	const onMouseEnter = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(true);
		}
	};
	const onMouseLeave = () => {
		if (window.innerWidth < 960) {
			setDropdown(false);
		} else {
			setDropdown(false);
		}
	};
	const changeIcon = () => {
		if (window.scrollY >= 10) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener("scroll", changeIcon);

	return (
		<>
			<nav className="navbar">
				<Link to="/" className="navbar-logo">
					<img src={Logo} alt="logo"></img>
				</Link>
				<div className="menu-icon" onClick={handleClick}>
					<i className={click ? "fas fa-times" : "fas fa-bars"}></i>
				</div>

				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
						<Link to="/Menu" className="nav-links" onClick={closeMobileMenu}>
							Menu <i className="fas fa-caret-down" />
						</Link>
						{dropdown && <Dropdown />}
					</li>
					<li className="nav-item">
						<Link to="/About" className="nav-links" onClick={closeMobileMenu}>
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
