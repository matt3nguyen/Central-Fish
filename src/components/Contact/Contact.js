import React from "react";
import Iframe from "react-iframe";
import "./Contact.css";
export default function Contact() {
	return (
		<body className="contact-us">
			<header>
				<h1 className="main">
					Contact
					<hr />
				</h1>
				<Iframe
					className="maps"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.620650247583!2d-80.7838946843105!3d35.21591698030556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541f89902aac3f%3A0x99b0ae0815e748b2!2sCentral%20Fish%20Market!5e0!3m2!1sen!2sus!4v1621828330567!5m2!1sen!2sus"
					width="600"
					height="450"
					allowfullscreen=""
					loading="lazy"
				></Iframe>
			</header>
			<>
			<div>
				<div className="information">
					<p className="contact">
						Hours:
						<br />
						<span className="info"> Sun, Mon, Tue : Closed</span>
						<span className="info"> Wed: 10:00 AM – 6:00 PM</span>
						<span className="info"> Thu: 10:00 AM – 7:00 PM</span>
						<span className="info"> Fri: 10:00 AM – 7:00 PM</span>
						<span className="info"> Sat: 10:00 AM – 7:00 PM</span>
					</p>
					<hr />
					<p className="contact">
						Location:
						<br />
						<button className="button1">
							<a
								href="https://www.google.com/maps/dir//Central+Fish+Market/@35.2158968,-80.8517461,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88541f89902aac3f:0x99b0ae0815e748b2!2m2!1d-80.781706!2d35.215917"
								dir="rtl"
							>
								Directions
							</a>
						</button>
						<span className="info" dir="ltr">
							<br />
							<address> 3701 Central Ave, Charlotte, NC 28205</address>
						</span>
					</p>
					<hr />
					<p className="contact">
						Phone: <br />
						<button className="button1">
							<a href="tel:+1-704-536-9100">Call now</a>
						</button>
						<span className="info" dir="ltr">
							(704) 536-9100
						</span>
					</p>
				</div>
			</div>
			</>
		</body>
	);
}
