import React from 'react'

import MenuItems from './MenuItems'
import { MenuObjOne, MenuObjTwo } from './MenuItems/Data'
import { BrowserRouter as Router } from "react-router-dom";


const Menu = () => {
    return (
        <Router>
       
           <MenuItems {...MenuObjOne} />
          
           <MenuItems {...MenuObjTwo} />

        </Router>
    )
}

export default Menu
