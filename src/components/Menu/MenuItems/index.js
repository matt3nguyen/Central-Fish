import React from 'react'
import Dropdown from '../Dropdown/SubNav'
import {
    InfoContainer,
    InforWraper, InfoRow, Column1, Column2, Heading, Subtitle,list
} from './MItemElements'

const MenuItems = ({id ,headline, description,list}) => {
    return (
        <>
        <InfoContainer id={id} >
            <InforWraper>
                <InfoRow>
                <Column1>
                <Heading>{headline}
                            </Heading>
                            <Subtitle>    {description}
                            </Subtitle>
                </Column1>
                    <Column2>
                       {list}
                    </Column2>
                </InfoRow>
            </InforWraper>
        </InfoContainer>

            
        </>
    )
}

export default MenuItems
