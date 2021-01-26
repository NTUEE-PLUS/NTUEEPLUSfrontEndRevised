import React from 'react'
import NavBar from '../../component/NavBar'

const navButton = [
    { href: '/in/Career', buttonText: 'Career' },
    { href: '/in/Study', buttonText: 'Study' },
    { href: '/in/Column', buttonText: 'Column' },
    { href: '/in/Search', buttonText: 'Search' },
]

const Nav = () => {
    return (
        <NavBar 
            hasNavDropdown={false}
            navButton={navButton}
            navBrand='/in'
        />
    )
}
export default Nav
