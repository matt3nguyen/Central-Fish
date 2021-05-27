import styled from "styled-components";
import ImgBg from "../../../images/APC_0124-2.jpg";

export const HeroContainer = styled.div`
	background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${ImgBg});
	height: 100vh;
	background-position: center;
	background-size: cover;
`;
export const HeroContent = styled.div`
	height: calc(100vh - 80px);
	max-height: 100%;
	width: 200px;
	padding: 0rem cal((100vw - 1300px) /2);
`;
export const HeroItems = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	height: 100vh;
	max-height: 100%;
	padding: 0 2rem;
	width: 650px;
	color: #fff;
	text-transform: uppercase;
	line-height: 1;
	font-weight: lighter;
	@media screen and (max-width: 650px) {
		width: 400px;
	}
`;
export const HeroH1 = styled.h1`
	font-size: clamp(2.5rem, 10vw, 5rem);
	font-family: Alegreya Sans, italic;
	margin-bottom: 1rem;
	box-shadow: 3px 5px white;
	letter-spacing: 3px;
	cursor: default;
	background-color: #e9ba23;
`;
export const HeroP = styled.p`
	font-size: clamp(2rem, 2.5vw, 3rem);
	margin-bottom: 2rem;
	padding-bottom: 0.01rem;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
		"Open Sans", "Helvetica Neue", sans-serif;
	cursor: default;
`;
export const HeroBtn = styled.button`
	font-size: 1.4 rem;
	padding: 1rem 4rem;
	border: none;
	background: #e31837;
	color: #fff;

	&:hover {
		background: #ffc500;
		transition: 0.2 ease-out;
		cursor: pointer;
		color: #000;
	}
`;
