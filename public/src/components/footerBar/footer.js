import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYelp } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

function FooterBar() {
	return (
		<div className="footer">
			<div className="media">
				<a
					id="location"
					href="https://www.google.com/maps/dir//Central+Fish+Market/data=!4m8!4m7!1m0!1m5!1m1!1s0x88541f89902aac3f:0x99b0ae0815e748b2!2m2!1d-80.781706!2d35.215917"
				>
					<i className="fas fa-map-marker-alt"></i>
				</a>
				<a href="facebook.com" id="fa">
					<FontAwesomeIcon icon={faFacebook} size="2x" />
				</a>
				<a href="instagram.com" id="ins">
					<FontAwesomeIcon icon={faInstagram} size="2x" />
				</a>
				<a href="yelp.com" id="yelp">
					<FontAwesomeIcon icon={faYelp} size="2x" />
				</a>
			</div>
			<ul>
				<li className="list">
					<a href="https://www.google.com/search?q=central+fish+market&oq=cent&aqs=chrome.0.69i59j69i57j69i61j69i60j69i61j69i60l2.868j0j1&sourceid=chrome&ie=UTF-8#lpqa=d,2">
						Have questions?
					</a>
				</li>
				<li className="list">
					<a href="tel:+1-704-536-9100">Call in order</a>
				</li>
				<li className="list">
					<p>We accept Visa/Mastercard, American Express, Cash and EBT for raw food</p>
				</li>
			</ul>
			<div id="copyr">Central Fish Market © 2021. All Rights Reserved.</div>
		</div>
	);
}
export default FooterBar;
