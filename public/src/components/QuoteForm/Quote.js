import React from "react";

export const Quote = ({ showModal, setShowModal }) => {
	return (
		<>
			{showModal ? (
				<div className="contactForm">
					<h1>Get Quote</h1>
					<small>We'll get back to you as quickly as possible</small>

					<form className="cf" action="#">
						<input placeholder="Name" type="text" required />
						<input placeholder="Email" type="email" required />
						<input placeholder="Subject" type="text" required />
						<textarea placeholder="Comment"></textarea>
						<input className="formBtn" type="submit" />
					</form>
				</div>
			) : null}
		</>
	);
};
export default Quote;
