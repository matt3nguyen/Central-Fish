import styled from 'styled-components'
import { Link as LinkS } from  "react-scroll" 

export const SubNcontainer = styled.div `
	background-color: #fff;
	display: flex;
	position: fixed;
	top: 60px;
	left: 0;
	padding-top: 70px;
	padding-left: 35%;
	width: 100%;
	height: 120px;
	z-index: 1;
	`
export const SubNMenu = styled.ul ` 
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;
`
export const SubNItem = styled.li `
	display: block;
`
export const SubNLink = styled(LinkS) `
	display: block;
	color: #0089c0;
	align-items: center;
	text-decoration: none;
	padding: 10px;
	height: 100%;
	cursor: pointer;
	`

