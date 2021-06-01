import styled from 'styled-components'
import { Link as LinkS } from  "react-scroll" 


export const Topbar = styled.div ` 
	position: static;
	top:0; 
	background-color: #fff;
	height: 40px;
	@media screen and (max-width: 960px) {
		display: none;
	}

`
export const SubNcontainer = styled.div `
	background-color: #fff;
	position: sticky;
	top: 0;
	height: 100px;
	text-align: center;
	padding-top: 10px;
	
	box-shadow: 0px 0px 3px rgb(173, 172, 172);
	z-index: 1000;
	@media screen and (max-width: 600px) {
		display: none;}
	`
export const SubNMenu = styled.ul ` 
	display: flex;
	justify-content: center;
	font-size: 20px;
	list-style: none;
	text-indent: 100px;
	@media screen and (max-width: 1100px) {
		text-indent: 5vw;
	}
	@media screen and (max-width: 730px) {
		text-indent: 5vw;
		width: fit-content;
		font-size: 15px;
		padding-top: 10px;
		height: fit-content;
	.icon {
		display: none;
	
	}
	
	}

`
export const SubNItem = styled.li `
	padding-left: auto;
	padding-right: auto;
	
`
export const SubNLink = styled(LinkS) `
	display: block;
	color: #0089c0;
	width: max-content;
	text-decoration: none;
	cursor: pointer;

	`

