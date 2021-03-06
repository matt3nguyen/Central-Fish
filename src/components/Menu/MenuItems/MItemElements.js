import styled from 'styled-components'


export const InfoContainer = styled.div `
	height: max-content;
    @media screen and (max-width:960px) {
        padding: 100px 0 ;
    } 
`


export const InforWraper = styled.div `
    display: grid;
    background-color: transparent;
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    @media screen and (max-width: 600px) {
		font-size: 10px;
        justify-content: center;
    }
`

export const InfoRow = styled.div`   
    display:grid;
    grid-auto-columns: minmax(auto, 1fr);
    @media screen and (max-width: 960px) {
        font-size: smaller;
    }

`
export const Column1 = styled.div `
    padding-top: 200px;
    grid-area: 1/1/ span 1 / span 1;
    @media screen and (max-width: 600px) {
		padding-top: 0px;
    }

`
export const Column2 = styled.div `
    grid-area: 2/1 ;
    height: 100%;
    padding-bottom: 100%;
    @media screen and (max-width: 600px) {
		padding-bottom: 0px;
        width: screen;
    }

`

export const TextWraper = styled.div` 
    max-width: 100%;
    padding-top: 0;
    padding-bottom: 60px;

` 
export const Heading = styled.h1 `
    text-align: center;
    font-size: 48px;
    padding-bottom: 30px;
    line-height:1.1 ;
    font-weight: 600;
    color: orange;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.div ` 
display:flex;
justify-content: flex-start;
margin-bottom: 20px;
`
export const Item = styled.li` 
    font-size: 12px;
    text-align: center;
    color: black;
` 

