import React from 'react'
import NavBar from '../../component/NavBar'
import { OUT_CONFIG } from "../../config/NavBarConfig"

const Nav = () => {
    return (
        <NavBar 
            hasNavDropdown={OUT_CONFIG.hasNavDropdown}
            navDropdown={OUT_CONFIG.navDropdown}
            navButton={OUT_CONFIG.navButton}
            navBrand={OUT_CONFIG.navBrand}
        />
    )
}
export default Nav
