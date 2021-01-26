import React from 'react'
import Nav from '../../component/NavBar'
import { OUT_CONFIG } from "../../config/NavBarConfig"

const NavBar = () => {
    return (
        <Nav 
            hasNavDropdown={OUT_CONFIG.hasNavDropdown}
            navDropdown={OUT_CONFIG.navDropdown}
            navButton={OUT_CONFIG.navButton}
            navBrand={OUT_CONFIG.navBrand}
        />
    )
}
export default NavBar
