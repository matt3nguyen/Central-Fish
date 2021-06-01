import React from 'react'

import MenuItems from './MenuItems'
import { MenuObjOne, MenuObjThree, MenuObjTwo } from './MenuItems/Data'
import { BrowserRouter as Router } from "react-router-dom";
import { MenuContainer, MenuImage } from './MenuElements';
import Dropdown from './Dropdown/SubNav';


const Menu = () => {
    return (
        <Router>
        <Dropdown/>
         <MenuContainer>
           <MenuItems {...MenuObjOne} ></MenuItems>          
           <MenuItems {...MenuObjTwo} ></MenuItems>
           <MenuItems {...MenuObjThree}></MenuItems>
        </MenuContainer>
        </Router>
    )
}

export default Menu
