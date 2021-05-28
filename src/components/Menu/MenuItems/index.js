import React from 'react'
<<<<<<< HEAD
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
                            
=======
import {
    InfoContainer,
    InforWraper, InfoRow, Column1, Column2, TextWraper, Heading, Subtitle, Text
} from './MItemElements'

const MenuItems = (id ,headline, description, Item) => {
    return (
        <>
        <InfoContainer id={id} >
            <InforWraper>
                <InfoRow>
                    <Column1>
                        <TextWraper>
                            <Heading>{headline}
                            </Heading>
>>>>>>> 0e14513008f8ee5704d9029c8dea914efb557c7f
                            <Subtitle>
                                {description}
                            </Subtitle>
                            <Text>
                               {Item}
                            </Text>
                        </TextWraper>
<<<<<<< HEAD

                    </Column2>
                    <Column3>
                        <TextWraper>
                            
                            <Subtitle>
                        
=======
                    </Column1>
                    <Column2>
                        <TextWraper>
                            <Heading>Heading

                            </Heading>
                            <Subtitle>
                                Subtitle
>>>>>>> 0e14513008f8ee5704d9029c8dea914efb557c7f
                            </Subtitle>
                            <Text>
                               
                            </Text>
                        </TextWraper>
<<<<<<< HEAD
                    </Column3>
=======
                    </Column2>
>>>>>>> 0e14513008f8ee5704d9029c8dea914efb557c7f
                </InfoRow>
            </InforWraper>
        </InfoContainer>

            
        </>
    )
}

export default MenuItems
