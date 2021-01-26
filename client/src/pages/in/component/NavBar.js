import React from 'react'
import NavBar from '../../component/NavBar'
import { IN_CONFIG } from "../../config/NavBarConfig"

const Nav = () => {
    return (
        <NavBar 
            hasNavDropdown={IN_CONFIG.hasNavDropdown}
            navButton={IN_CONFIG.navButton}
            navBrand={IN_CONFIG.navBrand}
        />
    )
}
export default Nav
