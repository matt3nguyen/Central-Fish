import React from 'react'

import MenuItems from './MenuItems'
import { MenuObjOne, MenuObjThree, MenuObjTwo } from './MenuItems/Data'
import { BrowserRouter as Router } from "react-router-dom";
import { MenuContainer } from './MenuElements';


const Menu = () => {
    return (
        <Router>
            <MenuContainer>
       
           <MenuItems {...MenuObjOne} ></MenuItems>          
           <MenuItems {...MenuObjTwo} ></MenuItems>
           <MenuItems {...MenuObjThree}></MenuItems>
</MenuContainer>
        </Router>
    )
}

export default Menu
