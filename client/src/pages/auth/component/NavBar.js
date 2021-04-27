import React from 'react'
import NavBar from '../../component/NavBar'
import { AUTH_CONFIG } from "../../config/NavBarConfig"


const Nav = () => {
    return (
        <NavBar 
            hasNavDropdown={AUTH_CONFIG.hasNavDropdown}
            navButton={AUTH_CONFIG.navButton}
            navBrand={AUTH_CONFIG.navBrand}
        />
    )
}
export default Nav