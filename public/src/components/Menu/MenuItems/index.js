import React from 'react'
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
                            <Subtitle>
                                {description}
                            </Subtitle>
                            <Text>
                               {Item}
                            </Text>
                        </TextWraper>
                    </Column1>
                    <Column2>
                        <TextWraper>
                            <Heading>Heading

                            </Heading>
                            <Subtitle>
                                Subtitle
                            </Subtitle>
                            <Text>
                               
                            </Text>
                        </TextWraper>
                    </Column2>
                </InfoRow>
            </InforWraper>
        </InfoContainer>

            
        </>
    )
}

export default MenuItems
