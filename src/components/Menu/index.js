import React from 'react'

import MenuItems from './MenuItems'
import { MenuObjFour, MenuObjOne, MenuObjThree, MenuObjTwo, MenuObjFive, MenuObjSix } from './MenuItems/Data'
import { BrowserRouter as Router } from "react-router-dom";
import { MenuContainer } from './MenuElements';
import Dropdown from './Dropdown/SubNav';


const Menu = () => {
    return (
        <Router>
        <Dropdown/>
         <MenuContainer>
           <MenuItems {...MenuObjOne} ></MenuItems>          
           <MenuItems {...MenuObjTwo} ></MenuItems>
           <MenuItems {...MenuObjThree}></MenuItems>
           <MenuItems {...MenuObjFour}></MenuItems>
           <MenuItems {...MenuObjFive}></MenuItems>
           <MenuItems {...MenuObjSix}></MenuItems>
        </MenuContainer>
        </Router>
    )
}

export default Menu
