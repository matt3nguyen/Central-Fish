import React, { useState } from "react";
import "./Button.css";
import Quote from "../QuoteForm/Quote";

function Button() {
	const [showModal, setShowModal] = useState(false);
	const openModal = () => {
		setShowModal((prev) => !prev);
	};
	return (
		<div className="ctForm">
			<button onClick={openModal} className="btn">
				Get Quote
			</button>
			<Quote showModal={showModal} setShowModal={setShowModal}></Quote>
		</div>
	);
}
export default Button;
