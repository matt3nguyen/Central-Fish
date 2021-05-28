import React from 'react'
<<<<<<< HEAD

import MenuItems from './MenuItems'
import { MenuObjOne, MenuObjTwo } from './MenuItems/Data'
import { BrowserRouter as Router } from "react-router-dom";


const Menu = () => {
    return (
        <Router>
       
           <MenuItems {...MenuObjOne} />
          
           <MenuItems {...MenuObjTwo} />

        </Router>
=======
import { MenuItem, MenuContainer } from './MenuElements'
import MenuItems from './MenuItems'
import { MenuObjOne } from './MenuItems/Data'

const Menu = () => {
    return (
        <>
        <MenuContainer>
           <MenuItem>
           <MenuItems {...MenuObjOne} />
           </MenuItem>
        </MenuContainer>
        </>
>>>>>>> 0e14513008f8ee5704d9029c8dea914efb557c7f
    )
}

export default Menu
