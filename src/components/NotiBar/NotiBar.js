import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYelp } from "@fortawesome/free-brands-svg-icons";
import "./NotiBar.css";

function NotificationBar() {
	return (
		<div>
			<div className="social-container">
				<div className="content">
					<p className="hours">
						<span className="HOURS">HOURS</span>: Wed.-Sat 10am - 7pm
					</p>

					<a
						href="https://www.google.com/maps/dir//Central+Fish+Market/data=!4m8!4m7!1m0!1m5!1m1!1s0x88541f89902aac3f:0x99b0ae0815e748b2!2m2!1d-80.781706!2d35.215917"
						className="find-us"
					>
						<i class="fas fa-map-marker-alt"></i>
					</a>
					<a href="facebook.com" className="facebook social">
						<FontAwesomeIcon icon={faFacebook} size="2x" />
					</a>
					<a href="instagram.com" className="instagram social">
						<FontAwesomeIcon icon={faInstagram} size="2x" />
					</a>
					<a href="yelp.com" className="yelp social">
						<FontAwesomeIcon icon={faYelp} size="2x" />
					</a>
				</div>
			</div>
		</div>
	);
}

export default NotificationBar;
