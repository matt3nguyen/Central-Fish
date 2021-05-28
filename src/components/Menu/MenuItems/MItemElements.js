import styled from 'styled-components'

export const InfoContainer = styled.div `
	height: 100vh;
    @media screen and (max-width:960px) {
        padding: 100px 0 ;
    } 
`

export const InforWraper = styled.div `
    display: grid;
    background-color: blue;
    z-index: 1 ;
    height: 100vh;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const InfoRow = styled.div`   
    display:grid;
    background-color: orange;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
`
export const Column1 = styled.div `
    margin-top: 200px;
    background-color: pink;
    padding: 10px 15px;
    grid-area: 1/1/ span 1 / span 2;
`
export const Column2 = styled.div `
    background-color: green;
    padding: 10px 15px;
    grid-area: 2/1 ;
    height: 600px;
`
export const Column3 = styled.div `
    height: 600px;
    background-color: white;
    padding: 10px 15px;
    grid-area: 2/2 ;
`

export const TextWraper = styled.div` 
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

` 
export const Heading = styled.h1 `
    text-align: center;
    font-size: 48px;
    line-height:1.1 ;
    font-weight: 600;
    color: red;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.div ` 
display:flex;
justify-content: flex-start;

`
export const Text = styled.div` 
    font-size: 12px;
    text-align: center;
    color: black;
` 