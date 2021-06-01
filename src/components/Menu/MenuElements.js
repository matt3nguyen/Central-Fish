import styled from 'styled-components'
import Img from '../../images/APC_0212.png'


export const MenuImage =styled.div ` 
background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${Img});
position: fixed;
height: 500px;
width: 100%;
background-position: center;
	background-size: cover;
`
export const MenuContainer = styled.div`
  display: grid;
    background-color: transparent;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
	margin-bottom: 200vh;
    padding: 0 24px;
    justify-content: center;
   `

export const MenuItem =styled.div`

`

