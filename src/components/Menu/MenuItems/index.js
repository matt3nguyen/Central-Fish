import React from 'react'
import Dropdown from '../Dropdown/SubNav'
import {
    InfoContainer,
    InforWraper, InfoRow, Column1, Column2,Column3, TextWraper, Heading, Subtitle, Text
} from './MItemElements'

const MenuItems = ({id ,headline,headline2, description, Item}) => {
    return (
        <>
        <Dropdown></Dropdown>
        <InfoContainer id={id} >
            <InforWraper>
                <InfoRow>
                <Column1>
                <Heading>{headline}
                            </Heading>
                </Column1>
                    <Column2>
                        <TextWraper>
                            
                            <Subtitle>
                                {description}
                            </Subtitle>
                            <Text>
                               {Item}
                            </Text>
                        </TextWraper>

                    </Column2>
                    <Column3>
                        <TextWraper>
                            
                            <Subtitle>
                        
                            </Subtitle>
                            <Text>
                               
                            </Text>
                        </TextWraper>
                    </Column3>
                </InfoRow>
            </InforWraper>
        </InfoContainer>

            
        </>
    )
}

export default MenuItems
