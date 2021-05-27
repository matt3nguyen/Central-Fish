import React from 'react'
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
    )
}

export default Menu
