import styled from 'styled-components'

export const Menu = styled.div `

height: 100vh;
    max-width: 100%;
    max-height: 100%;
    background-color: aqua;
` 

 
export const MenuContainer = styled.div`
  position: fixed;
   font-size: inherit;
   z-index: 1000;
   `

export const MenuItem =styled.div`

    background-color: #fff;
	display: flex;
	position: fixed;
	top: 60px;
	left: 0;
	padding-top: 40px;
	padding-left: 35%;
	width: 100%;
	height: 120px;
	z-index: 1;
	box-shadow: 0px 0px 3px rgb(173, 172, 172);
    z-index: 100;
`
