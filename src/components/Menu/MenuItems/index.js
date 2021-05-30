import React from 'react'
import Dropdown from '../Dropdown/SubNav'
import {
    InfoContainer,
    InforWraper, InfoRow, Column1, Column2,Column3, TextWraper, Heading, Subtitle, Text
} from './MItemElements'

const MenuItems = ({id ,headline, description}) => {
    return (
        <>
        <Dropdown></Dropdown>
        <InfoContainer id={id} >
            <InforWraper>
                <InfoRow>
                <Column1>
                <Heading>{headline}
                            </Heading>
                            <Subtitle>
                                {description}
                            </Subtitle>
                </Column1>
                    <Column2>
                        <li>Salmon Whole Fish 		$7.99/lb</li>
                        <li>King Mackerel Whole Fish  	$7.99/lb</li>
<li>Red Snapper (avg 1-2lb/each) 	$8.59/lb</li>
<li>Black Bass (avg 1-2lb/each)  	$6.99/lb</li>
<li>White Bass (avg 1-2lb/each) 	$5.49/lb</li>
<li>Flounder (avg 1-2lb/each)  	$8.29/lb</li>
<li>Pink Snapper (1-3lb/each)	 $6.99/lb</li>
<li>Yellow Croaker (avg 1lb/each) 	$4.99/lb</li>
<li>Fresh NC Croaker 		$4.99/lb</li>
<li>White Perch 			$4.99/lb</li>
<li>Porgy 				$4.29/lb</li>
<li>Florida Bream 		$3.79/lb</li>
<li>Whiting  			$4.99/lb</li>
<li>Pompano			$4.99/lb</li>
<li>Tilapia 				$2.99/lb</li>
<li>Catfish (avg 2-4lb/each) 		$3.79/lb
</li>

                    </Column2>
                    
                </InfoRow>
            </InforWraper>
        </InfoContainer>

            
        </>
    )
}

export default MenuItems
